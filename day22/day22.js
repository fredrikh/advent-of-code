const toNodes = lines => {
  let nodes = new Map()
  lines.forEach( ( line, i ) => {
    [ ...line ].forEach( ( node, j ) => { 
      if ( node === '#' ) nodes.set( `${j},${i}`, '#' ) 
    } )
  } )
  return nodes
}

const getStartNode = input => {
  const i = Math.floor( input.length / 2 )
  return [ i, i ]
}

const run = ( burstFunc ) => ( input, bursts ) => {
  const nodes = toNodes( input )
  let dir = [ 0, -1 ], node = getStartNode( input ), infections = 0
  while ( bursts-- ) {
    [ node, dir, infected ] = burstFunc( node, dir, nodes )
    if ( infected ) infections++
  }
  return infections
}

const rotate = ( [ x, y ], direction ) => { 
  const nesw = [ [ 0, -1 ], [ -1, 0 ], [ 0, 1 ], [ 1, 0 ] ]
  const index = nesw.findIndex( ( [ px, py ] ) => px === x && py === y ) 
  return nesw[ ( index + direction + 4 ) % 4 ]
}
const turnRight = dir => rotate( dir, -1 )
const turnLeft = dir => rotate( dir, 1 )
const reverse = dir => rotate( dir, 2 )
const add = ( [ x0, y0 ], [ x1, y1 ] ) => [ x0 + x1, y0 + y1 ]

const burstA = ( node, dir, nodes ) => {
  const pos = node.toString()
  if ( nodes.has( pos ) ) { // infected  
    dir = turnRight( dir )    
    nodes.delete( pos ) // clean
  } else {    
    dir = turnLeft( dir )
    nodes.set( pos, '#' ) // infect
  }
  node = add( node, dir )  
  return [ node, dir, nodes.has( pos ) ]
}

const burstB = ( node, dir, nodes ) => {
  // use map as nodes
  const pos = node.toString()
  if ( nodes.has( pos ) ) { 
    let state = nodes.get( pos )
    switch ( state ) {
      case '#':
        nodes.set( pos, 'F' )
        dir = turnRight( dir )
        break
      case 'W':
        nodes.set( pos, '#')
        break
      case 'F': 
        nodes.delete( pos ) // clean
        dir = reverse( dir )
        break
    }
  } else {    
    dir = turnLeft( dir )
    nodes.set( pos, 'W' ) // Weaken
  }
  node = add( node, dir )
  return [ node, dir, nodes.get( pos ) === '#' ]
}

module.exports = { 
  runA: run( burstA ),
  runB: run( burstB ) }