const day1 = require( './day2' )

const inputA = '5 1 9 5\n7 5 3\n2 4 6 8'
const inputB = '5 9 2 8\n9 4 7 3\n3 8 6 5'

// A
test( 'produces a checksum of 18', () => {
  expect( day1.checksumA( inputA ) ).toBe( 18 )
} )

// A
test( 'produces a checksum of 9', () => {
  expect( day1.checksumB( inputB ) ).toBe( 9 )
} )