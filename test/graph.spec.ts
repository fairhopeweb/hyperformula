import {Graph} from '../src/Graph'

describe('Basic Graph manipulation', () => {
  it('#addNode', () => {
    const graph = new Graph()

    graph.addNode('foo')

    expect(graph.nodesCount()).toBe(1)
  })

  it('#addNode for the second time', () => {
    const graph = new Graph()

    graph.addNode('foo')
    graph.addNode('foo')

    expect(graph.nodesCount()).toBe(1)
  })

  it('#addNode for the second time doesnt reset adjacent nodes', () => {
    const graph = new Graph()

    graph.addNode('foo')
    graph.addNode('bar')
    graph.addEdge('foo', 'bar')

    graph.addNode('foo')

    expect(graph.adjacentNodes('foo')).toEqual(new Set(['bar']))
  })

  it('#hasNode when there is node', () => {
    const graph = new Graph()

    graph.addNode('foo')

    expect(graph.hasNode('foo')).toBe(true)
  })

  it('#hasNode when there is no node', () => {
    const graph = new Graph()

    expect(graph.hasNode('foo')).toBe(false)
  })

  it('#adjacentNodes', () => {
    const graph = new Graph()

    graph.addNode('foo')
    graph.addNode('bar')
    graph.addEdge('foo', 'bar')

    expect(graph.adjacentNodes('foo')).toEqual(new Set(['bar']))
  })

  it('#addEdge removes multiple edges', () => {
    const graph = new Graph()

    graph.addNode('foo')
    graph.addNode('bar')
    graph.addEdge('foo', 'bar')
    graph.addEdge('foo', 'bar')

    expect(graph.adjacentNodes('foo')).toEqual(new Set(['bar']))
  })

  it('#addEdge is raising an error when the origin node not present', () => {
    const graph = new Graph()
    graph.addNode('target')

    expect(() => {
      graph.addEdge('origin', 'target')
    }).toThrowError(new Error('Unknown node origin'))
  })

  it('#addEdge is raising an error when the target node not present', () => {
    const graph = new Graph()
    graph.addNode('origin')

    expect(() => {
      graph.addEdge('origin', 'target')
    }).toThrowError(new Error('Unknown node target'))
  })

  it('#existsEdge works', () => {
    const graph = new Graph()
    graph.addNode('foo')
    graph.addNode('bar')
    graph.addEdge('foo', 'bar')

    expect(graph.existsEdge('foo', 'bar')).toBe(true)
  })

  it('#existsEdge when there is origin node but no edge', () => {
    const graph = new Graph()
    graph.addNode('foo')

    expect(graph.existsEdge('foo', 'bar')).toBe(false)
  })

  it('#existsEdge when there is no node', () => {
    const graph = new Graph()

    expect(graph.existsEdge('foo', 'bar')).toBe(false)
  })

  it('#edgesCount when there is no nodes', () => {
    const graph = new Graph()

    expect(graph.edgesCount()).toBe(0)
  })

  it('#edgesCount counts edges from all nodes', () => {
    const graph = new Graph()
    graph.addNode('bar1')
    graph.addNode('bar2')
    graph.addNode('first')
    graph.addEdge('first', 'bar1')
    graph.addNode('second')
    graph.addEdge('second', 'bar1')
    graph.addEdge('second', 'bar2')

    expect(graph.edgesCount()).toBe(3)
  })

  it('#topologicalSort for empty graph', () => {
    const graph = new Graph()

    expect(graph.topologicalSort()[0]).toEqual([])
    expect(graph.topologicalSort()[1]).toEqual([])
  })

  it('#topologicalSort node is included even if he is not connected to anything', () => {
    const graph = new Graph()
    graph.addNode('foo')

    expect(graph.topologicalSort()[0]).toEqual(['foo'])
    expect(graph.topologicalSort()[1]).toEqual([])
  })

  it('#topologicalSort for simple graph', () => {
    const graph = new Graph()
    graph.addNode('foo')
    graph.addNode('bar')
    graph.addEdge('bar', 'foo')

    expect(graph.topologicalSort()[0]).toEqual(['bar', 'foo'])
    expect(graph.topologicalSort()[1]).toEqual([])
  })

  it('#topologicalSort for more complex graph', () => {
    const graph = new Graph()
    graph.addNode('x0')
    graph.addNode('x1')
    graph.addNode('x2')
    graph.addNode('x3')
    graph.addNode('x4')
    graph.addEdge('x0', 'x2')
    graph.addEdge('x1', 'x2')
    graph.addEdge('x2', 'x3')
    graph.addEdge('x4', 'x3')

    expect(graph.topologicalSort()[0]).toEqual(['x0', 'x1', 'x4', 'x2', 'x3'])
    expect(graph.topologicalSort()[1]).toEqual([])
  })

  it('#topologicalSort for not connected graph', () => {
    const graph = new Graph()
    graph.addNode('x0')
    graph.addNode('x1')
    graph.addNode('x2')
    graph.addNode('x3')
    graph.addEdge('x0', 'x2')
    graph.addEdge('x1', 'x3')

    expect(graph.topologicalSort()[0]).toEqual(['x0', 'x1', 'x2', 'x3'])
    expect(graph.topologicalSort()[1]).toEqual([])
  })

  it('#topologicalSort returns vertices on trivial cycle', () => {
    const graph = new Graph()
    graph.addNode('x1')
    graph.addNode('x2')
    graph.addEdge('x1', 'x2')
    graph.addEdge('x1', 'x1')

    expect(graph.topologicalSort()[0]).toEqual([])
    expect(graph.topologicalSort()[1]).toEqual(['x1', 'x2'])
  })

  it('#topologicalSort returns vertices on cycle', () => {
    const graph = new Graph()
    graph.addNode('x0')
    graph.addNode('x1')
    graph.addNode('x2')
    graph.addEdge('x0', 'x1')
    graph.addEdge('x1', 'x2')
    graph.addEdge('x1', 'x1')

    expect(graph.topologicalSort()[0]).toEqual(['x0'])
    expect(graph.topologicalSort()[1]).toEqual(['x1', 'x2'])
  })

  it('#topologicalSort returns one-element cycle', () => {
    const graph = new Graph()
    graph.addNode('x0')
    graph.addEdge('x0', 'x0')

    expect(graph.topologicalSort()[0]).toEqual([])
    expect(graph.topologicalSort()[1]).toEqual(['x0'])
  })
})
