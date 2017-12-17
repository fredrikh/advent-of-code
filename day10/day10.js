class Circular {
  constructor( size ) {
    this.list = list( size )
    this.length = size
    this.pos = 0
  }
  reverse( length ) {
    if ( length <= 1 || length > this.length ) return this.list
    const to = length % this.length
    let l = rotate( this.list, -this.pos )
    
    return this.list = rotate( [ ...l.slice( 0, to ).reverse(), ...l.slice( to ) ], this.pos )
  }
  move( steps ) { return this.pos = ( this.pos + steps ) % this.length }
}

const list = size => [ ...Array( size ).keys() ]

const rotate = ( list, steps ) => [ ...list.slice( -steps ), ...list.slice( 0, -steps ) ]

const knot = ( input, rounds ) => {
  const c = new Circular( 256 )
  let skipSize = 0
  while ( rounds > 0 ) {
    input.forEach( length => {
      c.reverse( length )
      c.move( length + skipSize++ )
    } )
    rounds--
  }
  return c.list
}

const checksum = ( input ) => {
  const list = knot( input, 1 )
  return list[ 0 ] * list[ 1 ]
}
const pad = n => s => '0'.repeat( n - s.length ) + s
const hash = input => {
  const 
    xor = block => block.reduce( ( acc, b ) => acc ^= b ),
    stringToAsciiCodes = s => [ ...s ].map( c => c.charCodeAt( 0 ) ),
    hex = n => pad( 2 )( ( n ).toString( 16 ) )
  const 
    asciiCodes = stringToAsciiCodes( input ).concat( [ 17, 31, 73, 47, 23 ] ),
    sparseHash = knot( asciiCodes, 64 ),
    denseHash = []
  for ( let i = 0; i < 256; i += 16 ) denseHash.push( xor( sparseHash.slice( i, i + 16 ) ) )
  
  const s = denseHash.map( hex ).join( '' )

  return s
}

module.exports = { checksum, hash }


