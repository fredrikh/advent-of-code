function* transformations( pattern ) { 
  let 
    p = pattern,    
    flips = 2
  for ( let i = 0; i < flips; i++ ) {
    let rotations = 4
    while ( rotations-- ) {
      p = rotate( p )
      yield p
    }
    p = flip( p )
  }
}

const flip = pattern => pattern.split( /\// ).map( row => [ ...row ].reverse().join( '' ) ).join( '/' )

const rotate = pattern => {
  let [ fst, snd, trd ] = pattern.split( /\// )
  if ( trd ) {
    let 
      [ a, b, c ] = fst, 
      [ d, e, f ] = snd, 
      [ g, h, j ] = trd
    return  c + f + j + '/' + b + e + h + '/' + a + d + g
  } else {
    let       
      [ a, b ] = fst,
      [ c, d ] = snd
    return b + d + '/' + a + c
  }
} 

const list = size => [ ...Array( size ).keys() ]

const split = pattern => {
  const rows = pattern.split( /\// ).map( row => [ ...row ] )
  const size = rows.length
  const partSize = size % 2 ? 3 : 2
  const x = size * size / ( partSize * partSize )
  const parts = []
  for ( let row = 0; row < size; row += partSize ) {
    for ( let col = 0; col <  size; col += partSize ) {
      parts.push( rows.slice( row, row + partSize ).map( c => c.slice( col, col + partSize ).join( '' ) ).join( '/' ) )
    }
  }
  return parts
}

const join = patterns => {
  if ( patterns.length < 4 ) return patterns[ 0 ]
  const chunkSize = Math.sqrt( patterns.length )
  const x = patterns[0].split( '/' )[0].length
  const rows = []
  for ( let i = 0; i < patterns.length; i += chunkSize ) {
    let chunk = patterns.slice( i, i + chunkSize ).map( x => x.split( /\// ) )
    let row = []
    for ( let j = 0; j < x; j++ ) {      
      rows.push( chunk.reduce( ( acc, s ) => acc += s[ j ], '' ) )
    }
  }
  return rows.join( '/' )
}

const enhance = table => pattern  => {
  let t = transformations( pattern ), p = pattern
  do {    
    if ( table.has( p ) ) return table.get( p )
  } while ( p = t.next().value )
}

const toMap = enhancements => new Map( enhancements.map( line => line.split( ' => ' ) ) )

const fractal = ( enhancements, iterations ) => {
  const e = enhance( toMap( enhancements ) )
  let pattern = '.#./..#/###'
  while ( iterations-- ) {
    let patterns = split( pattern )
    patterns = patterns.map( e )
    pattern = join( patterns )
  }
  return [ ...pattern ].filter( x => x === '#' ).length
}

module.exports = { fractal, rotate, flip, split, join, enhance }