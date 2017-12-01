const day1 = require( './day1' )

// A
test( '1122 produces a sum of 3 ', () => {
  expect( day1.inverseCaptchaA( '1122' ) ).toBe( 3 )
} )

test( '1111 produces a sum of 4 ', () => {
  expect( day1.inverseCaptchaA( '1111' ) ).toBe( 4 )
} )

test( '1234 produces a sum of 0 ', () => {
  expect( day1.inverseCaptchaA( '1234' ) ).toBe( 0 )
} )

test('91212129 produces a sum of 9 ', () => {
  expect( day1.inverseCaptchaA( '91212129' ) ).toBe( 9 )
} )

// B
test( '1212 produces a sum of 6 ', () => {
  expect( day1.inverseCaptchaB( '1212' ) ).toBe( 6 )
} )

test( '1221 produces a sum of 0 ', () => {
  expect( day1.inverseCaptchaB( '1221' ) ).toBe( 0 )
} )

test( '123425 produces a sum of 4 ', () => {
  expect( day1.inverseCaptchaB( '123425' ) ).toBe( 4 )
} )

test( '123123 produces a sum of 12 ', () => {
  expect( day1.inverseCaptchaB( '123123' ) ).toBe( 12 )
} )

test( '12131415 produces a sum of 4 ', () => {
  expect( day1.inverseCaptchaB( '12131415' ) ).toBe( 4 )
} )
