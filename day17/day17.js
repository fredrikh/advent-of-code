const spin = steps => ( offset, length ) => ( offset + steps ) % length
const spin355 = spin( 355 )

const spinlock = ( spins ) => {
  let pos = 0, state = [ 0 ] 
  const insertAt = ( pos, value ) => {
    if ( pos >= state.length ) state.push( value )
    else state.splice( pos, 0, value )
  }
  for ( let i = 1; i < spins + 1; i++ ) {
    pos = spin355( pos, state.length )
    insertAt( pos + 1, i )
    pos++
  }
  return state[ pos + 1 ]
}

const angrySpinlock = ( spins ) => {
  let pos = 0, last = 0
  for ( let i = 1; i < spins + 1; i++ ) {
    pos = spin355( pos, i )
    if ( pos === 0 ) last = i
    pos++
  }
  return last
}

console.log( spinlock( 2017 ) )
console.log( angrySpinlock( 50000000 ) )


