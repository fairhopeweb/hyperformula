import {HyperFormula} from '../../src'
import {CellError, ErrorType} from '../../src/Cell'
import '../testConfig'

describe('MAX', () => {
  it('MAX with empty args',  () => {
    const engine =  HyperFormula.buildFromArray([['=MAX()']])
    expect(engine.getCellValue('A1')).toEqual(new CellError(ErrorType.NA))
  })

  it('MAX with args',  () => {
    const engine =  HyperFormula.buildFromArray([['=MAX(1, B1)', '3.14']])
    expect(engine.getCellValue('A1')).toBeCloseTo(3.14)
  })

  it('MAX with range',  () => {
    const engine =  HyperFormula.buildFromArray([['1'], ['3'], ['2'], ['=MAX(A1:A3)']])
    expect(engine.getCellValue('A4')).toEqual(3)
  })

  it('MAX with mixed arguments',  () => {
    const engine =  HyperFormula.buildFromArray([['1'], ['3'], ['2'], ['=MAX(4,A1:A3)']])
    expect(engine.getCellValue('A4')).toEqual(4)
  })

  it('MAX with string',  () => {
    const engine =  HyperFormula.buildFromArray([['1'], ['3'], ['2'], ['=MAX(A1:A3,"foo")']])
    expect(engine.getCellValue('A4')).toEqual(3)
  })

  it('MAX with string in range',  () => {
    const engine =  HyperFormula.buildFromArray([['1'], ['3'], ['foo'], ['=MAX(A1:A3)']])
    expect(engine.getCellValue('A4')).toEqual(3)
  })

  it('MAX of strings',  () => {
    const engine =  HyperFormula.buildFromArray([['foo'], ['bar'], ['=MAX(A1:A2)']])
    expect(engine.getCellValue('A3')).toEqual(0)
  })

  it('MAX of strings and -1',  () => {
    const engine =  HyperFormula.buildFromArray([['foo'], ['bar'], ['-1'], ['=MAX(A1:A3)']])
    expect(engine.getCellValue('A4')).toEqual(-1)
  })

  it('MAX of empty value',  () => {
    const engine =  HyperFormula.buildFromArray([['', '=MAX(A1)']])
    expect(engine.getCellValue('B1')).toEqual(0)
  })

  it('MAX of empty value and some negative number',  () => {
    const engine =  HyperFormula.buildFromArray([['', '-1', '=MAX(A1,B1)']])
    expect(engine.getCellValue('C1')).toEqual(-1)
  })
})
