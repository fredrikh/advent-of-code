const day16 = require( './day16' )


test( 'spin', () => {
  expect( day16.dance( 'abcde', [ 's1' ] ) ).toBe( 'eabcd' )
} )

test( 'exchange', () => {
  expect( day16.dance( 'eabcd', [ 'x3/4' ] ) ).toBe( 'eabdc') 
} )

test( 'partner', () => {
  expect( day16.dance( 'eabdc', [ 'pe/b' ] ) ).toBe( 'baedc') 
} ) 