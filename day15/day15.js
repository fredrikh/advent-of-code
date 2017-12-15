function* generator( factor, initial ) {
  const divisor = 2147483647
  let prev = initial
  while ( true ) yield ( prev = prev * factor % divisor ) & 0xFFFF
}

function* generatorMod( factor, initial, multipleOf ) {
  const divisor = 2147483647
  let prev = initial
  while ( true ) {
    prev = prev * factor % divisor
    if ( prev % multipleOf === 0 ) yield prev & 0xFFFF
  }
}

const matchCount = ( genA, genB, iterations ) => {
  let matches = 0
  for ( let i = 0; i < iterations; i++ ) if ( genA.next().value === genB.next().value ) matches++
  return matches
}

// 1
console.log( matchCount( generator( 16807, 722 ), generator( 48271, 354 ), 40000000 ) )
// 2
console.log( matchCount( generatorMod( 16807, 722, 4 ), generatorMod( 48271, 354, 8 ), 5000000 ) )

