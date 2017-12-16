const knotHash = require( '../day10/day10' )

const directions = [ [ 0, 1 ], [ -1, 0 ], [ 0, -1 ], [ 1, 0 ] ]

const 
  hashes = input => list( 128 ).map( n => knotHash.hash( `${input}-${n}` ) ),
  list = n => [ ...Array( n ).keys() ],
  pad = n  => s =>'0'.repeat( n - s.length ) + s 
  add = ( a, b ) => a + b,
  hexToBin = h => pad( 4 )( parseInt( h, 16, ).toString( 2 ) ),
  flatten = arr => [].concat( ...arr ),
  addPoints = ( [ x0, y0 ] ) => ( [ x1, y1] ) => [ x0 + x1, y0 + y1 ].toString()

const coordinates = ( s, i ) => {
  return [ ...s ]
    .map( ( c, j ) => { if ( c === '1' ) return [ j, i ].toString() } )
    .filter( Boolean )
}

const toBinary = ( hash, i ) => {
  return [ ...hash ]
    .map( hexToBin )
    .join( '' )
}

const parse = input => {
  return flatten( hashes( input )
    .map( toBinary )
    .map( coordinates ) )
}

const knurra = input => { 
  const 
    coordinates = new Set( parse( input ) ),
    used = new Set()
  
  const group = ( point ) => {
    if ( !coordinates.has( point ) || used.has( point ) ) return false
    used.add( point )    
    const 
      p = point.split( /,/ ).map( Number ),
      d = directions.map( addPoints( p ) )
    d.forEach( dir => group( dir ) )
    return true
  }

  return { used: coordinates.size,  groups: [ ...coordinates ].map( group ).filter( Boolean ).length }
}

module.exports = { knurra }