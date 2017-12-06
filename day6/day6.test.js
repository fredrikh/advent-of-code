const day6 = require ( './day6' )

test( '[ 0, 2, 7, 0 ] produces memory reallocation infinite loop in 5 steps', () => {
  const banks = [ 0, 2, 7, 0 ]
  expect( day6.reallocate( banks ) ).toBe( 5 )
} )