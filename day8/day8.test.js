const day8 = require( './day8' )

const input = [
  'b inc 5 if a > 1',
  'a inc 1 if b < 5',
  'c dec -10 if a >= 1',
  'c inc -20 if c == 10'
]

test ( 'the largest value should be 1', () => {
  expect( day8.run( input ).highestFinal ).toBe( 1 )
} )

test ( 'the largest value should be 1', () => {
  expect( day8.run( input ).highestMax ).toBe( 10 )
} )


