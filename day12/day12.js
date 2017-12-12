Set.prototype.union = function( setB ) {
  let union = new Set( this )
  for ( var elem of setB ) union.add( elem )
  return union
}

const parse = ( input ) => {
  const parseLine = ( acc, line ) => {
    const 
      parts = line.split( ' <-> '),
      id = Number( parts[ 0 ] ),
      pipes = parts[ 1 ].split( ',' ).map( Number )
    return acc.set( id, pipes )
  }
  return input.reduce( parseLine, new Map() )
}

const group = ( id, graph, visited = new Set() ) => {
  visited.add( id )
  graph.get( id )
    .filter( p => !visited.has( p ) )
    .forEach( p => group( p, graph, visited ) )
  return visited
}

const groupById = ( id, input ) => group( id, parse( input ) ).size
const groups = input => {
  const graph = parse( input )
  let 
    inSomeGroup = new Set()
    groupCount = 0
  graph.forEach( ( [ id, _ ] ) => {
    if ( !inSomeGroup.has( id ) ) {
      inSomeGroup = inSomeGroup.union( group( id, graph ) )
      groupCount++
    }
  } )
  return groupCount
}

module.exports = { groupById, groups }
