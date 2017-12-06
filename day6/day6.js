const reallocate = ( banks ) => {
  let timestamps = new Map()
  let snapshot = ''
  let cycles = 0
  timestamps.set( banks.toString(), 0 )
  do {
    snapshot = distribute( banks, largestBlockIndex( banks ) )
    cycles++
    if ( timestamps.has( snapshot ) ) return cycles - timestamps.get( snapshot )
    timestamps.set( snapshot, cycles )
  } while ( cycles < 10000 ) 

  return 0
}

const largestBlockIndex = ( banks ) => {
  let largestBlock = Math.max( ...banks )
  return banks.findIndex( x => x === largestBlock )
}

const distribute = ( banks, index ) => {
  let blocks = banks[ index ]
  banks[ index ] = 0
  while ( blocks > 0 ) {
    banks[ ++index % banks.length ]++
    blocks--
  }
  return banks.toString()
}

// console.log( reallocate( [ 0, 2, 7, 0 ] ) )
module.exports.reallocate = reallocate