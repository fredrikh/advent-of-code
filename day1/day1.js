'use strict'

const add = ( a, b ) => a + b

const captchaReaderA = input => {
  const 
    rx = /(\d)\1+/g,
    fst = Number( input[ 0 ] ),
    lst = Number( input[ input.length - 1 ] ),
    sums = fst === lst ? [ fst ] : []
  let match = null

  while ( match = rx.exec( input ) ) sums.push( ( match[ 0 ].length - 1 ) * Number( match[ 1 ] ) )

  return sums.reduce( add, 0 )
}

const halfwayAround = ( length ) => ( index ) => {
  const steps = length / 2
  return ( index + steps ) % length
}

const captchaReaderB = ( input ) => {
  const 
    numbers = input.split( '' ).map( Number ),
    halfwayIndex = halfwayAround( numbers.length ),
    matches = []
  for ( let i = 0; i < numbers.length; i++ ) {
    let 
      a = numbers[ i ], 
      b = numbers[ halfwayIndex( i ) ]
    if ( a === b ) matches.push( a )
  }
  return matches.reduce( add, 0 )
}

module.exports = {
  captchaReaderA: captchaReaderA,
  captchaReaderB: captchaReaderB
}