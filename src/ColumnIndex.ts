import {CellValue, SimpleCellAddress} from "./Cell";
import {AbsoluteCellRange} from "./AbsoluteCellRange";
import {Statistics, StatType} from "./statistics/Statistics";
import {RowsSpan} from "./RowsSpan";
import {ColumnsSpan} from "./ColumnsSpan";
import {LazilyTransformingAstService, Transformation, TransformationType} from "./LazilyTransformingAstService";

type ColumnMap = Map<CellValue, ValueIndex>
interface ValueIndex {
  version: number
  index: Array<number>
}
type SheetIndex = Array<ColumnMap>

export class ColumnIndex {
  private readonly index: Map<number, SheetIndex> = new Map()

  constructor(
      private readonly stats: Statistics,
      private readonly transformingService: LazilyTransformingAstService
  ) {
  }

  public add(value: CellValue, address: SimpleCellAddress) {
    this.ensureRecentData(address.sheet, address.col, value)

    this.stats.measure(StatType.BUILD_COLUMN_INDEX, () => {
      const valueIndex = this.getValueIndex(address.sheet, address.col, value)
      this.addValue(valueIndex, address.row)
    })
  }

  public remove(value: CellValue | null, address: SimpleCellAddress) {
    if (!value) {
      return
    }

    this.ensureRecentData(address.sheet, address.col, value)

    const columnMap = this.getColumnMap(address.sheet, address.col)
    let valueIndex = columnMap.get(value)
    if (!valueIndex) {
      return
    }

    const index = upperBound(valueIndex.index, address.row)
    valueIndex.index.splice(index, 1)

    if (valueIndex.index.length === 0) {
      columnMap.delete(value)
    }

    if (columnMap.size === 0) {
      delete this.index.get(address.sheet)![address.col]
    }
  }

  public change(oldValue: CellValue | null, newValue: CellValue, address: SimpleCellAddress) {
    if (oldValue === newValue) {
      return
    }
    this.remove(oldValue, address)
    this.add(newValue, address)
  }

  public find(key: any, range: AbsoluteCellRange): number {
    this.ensureRecentData(range.sheet, range.start.col, key)

    const columnMap = this.getColumnMap(range.sheet, range.start.col)
    if (!columnMap) {
      return -1
    }

    const valueIndex = columnMap.get(key)
    if (!valueIndex) {
      return -1
    }

    /* assuming that valueIndex is sorted already */
    const index = upperBound(valueIndex.index, range.start.row)
    const rowNumber = valueIndex.index[index]
    return rowNumber <= range.end.row ? rowNumber : -1
  }

  private addRows(col: number, rowsSpan: RowsSpan, value: CellValue) {
    const valueIndex = this.getValueIndex(rowsSpan.sheet, col, value)
    this.shiftRows(valueIndex, rowsSpan.rowStart, rowsSpan.numberOfRows)
  }

  private removeRows(col: number, rowsSpan: RowsSpan, value: CellValue) {
    const valueIndex = this.getValueIndex(rowsSpan.sheet, col, value)
    this.removeRowsFromValues(valueIndex, rowsSpan)
    this.shiftRows(valueIndex, rowsSpan.rowEnd + 1, -rowsSpan.numberOfRows)
  }

  public addColumns(columnsSpan: ColumnsSpan) {
    const sheetIndex = this.index.get(columnsSpan.sheet)
    if (!sheetIndex) {
      return
    }

    sheetIndex.splice(columnsSpan.columnStart, 0, ...Array(columnsSpan.numberOfColumns))
  }

  public removeColumns(columnsSpan: ColumnsSpan) {
    const sheetIndex = this.index.get(columnsSpan.sheet)
    if (!sheetIndex) {
      return
    }

    sheetIndex.splice(columnsSpan.columnStart, columnsSpan.numberOfColumns)
  }

  public getColumnMap(sheet: number, col: number): ColumnMap {
    if (!this.index.has(sheet)) {
      this.index.set(sheet, [])
    }
    let sheetMap = this.index.get(sheet)!
    let columnMap = sheetMap![col]

    if (!columnMap) {
      columnMap = new Map()
      sheetMap[col] = columnMap
    }

    return columnMap
  }

  public getValueIndex(sheet: number, col: number, value: CellValue): ValueIndex {
    const columnMap = this.getColumnMap(sheet, col)
    let index = this.getColumnMap(sheet, col).get(value)
    if (!index) {
      index = {
        version: this.transformingService.version(),
        index: []
      }
      columnMap.set(value, index)
    }
    return index
  }

  public ensureRecentData(sheet: number, col: number, value: CellValue) {
    const valueIndex = this.getValueIndex(sheet, col, value)
    const actualVersion = this.transformingService.version()
    if (valueIndex.version === actualVersion) {
      return
    }
    const relevantTransformations = this.transformingService.getTransformationsFrom(valueIndex.version, (transformation: Transformation) => {
      return transformation.sheet === sheet && (transformation.type === TransformationType.ADD_ROWS || transformation.type === TransformationType.REMOVE_ROWS)
    })
    for (const transformation of relevantTransformations) {
      switch (transformation.type) {
        case TransformationType.ADD_ROWS:
          this.addRows(col, transformation.addedRows, value)
          break
        case TransformationType.REMOVE_ROWS:
          this.removeRows(col, transformation.removedRows, value)
      }
    }
    valueIndex.version = actualVersion
  }

  private addValue(valueIndex: ValueIndex, rowNumber: number): void {
    const rowIndex = lowerBound(valueIndex.index, rowNumber)
    const value = valueIndex.index[rowIndex]
    if (value === rowNumber) {
      /* do not add same row twice */
      return
    }

    if (rowIndex === valueIndex.index.length - 1) {
      valueIndex.index.push(rowNumber)
    } else {
      valueIndex.index.splice(rowIndex + 1, 0, rowNumber)
    }
  }

  private removeRowsFromValues(rows: ValueIndex, rowsSpan: RowsSpan) {
    const start = upperBound(rows.index, rowsSpan.rowStart)
    const end = lowerBound(rows.index, rowsSpan.rowEnd)
    if (rows.index[start] <= rowsSpan.rowEnd) {
      rows.index.splice(start, end - start + 1)
    }
  }

  private shiftRows(rows: ValueIndex, afterRow: number, numberOfRows: number) {
    const index = upperBound(rows.index, afterRow)
    for (let i = index; i < rows.index.length; ++i) {
      rows.index[i] += numberOfRows
    }
  }
}


/*
* If key exists returns index of key
* Otherwise returns index of smallest element greater than key
* assuming sorted array and no repetitions
* */
export function upperBound(values: number[], key: number): number {
  let start = 0
  let end = values.length - 1

  while (start <= end) {
    let center = Math.floor((start + end) / 2)
    if (key > values[center]) {
      start = center + 1
    } else if (key < values[center]) {
      end = center - 1
    } else {
      return center
    }
  }

  return start
}


/*
* If key exists returns index of key
* Otherwise returns index of greatest element smaller than key
* assuming sorted array and no repetitions
* */
export function lowerBound(values: number[], key: number): number {
  let start = 0
  let end = values.length - 1

  while (start <= end) {
    let center = Math.floor((start + end) / 2)
    if (key > values[center]) {
      start = center + 1
    } else if (key < values[center]) {
      end = center - 1
    } else {
      return center
    }
  }

  return end
}
