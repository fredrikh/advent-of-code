const day1 = require( './day4' )

// A
test( 'aa bb cc dd ee is valid', () => {
  expect( day1.validPassphrase( 'aa bb cc dd ee' ) ).toBe( 1 )
} )

test( 'aa bb cc dd aa is not valid', () => {
  expect( day1.validPassphrase( 'aa bb cc dd aa' ) ).toBe( 0 )
} )

test( 'aa bb cc dd aaa is valid', () => {
  expect( day1.validPassphrase( 'aa bb cc dd aaa' ) ).toBe( 1 )
} )

// B
test( 'abcde fghij is a valid', () => {
  expect( day1.validPassphraseB( 'abcde fghij' ) ).toBe( 1 )
} )

test( 'abcde xyz ecdab is not valid', () => {
  expect( day1.validPassphraseB( 'abcde xyz ecdab' ) ).toBe( 0 )
} )

test( 'a ab abc abd abf abj is a valid', () => {
  expect( day1.validPassphraseB( 'a ab abc abd abf abj' ) ).toBe( 1 )
} )

test( 'iiii oiii ooii oooi oooo is valid', () => {
  expect( day1.validPassphraseB( 'iiii oiii ooii oooi oooo' ) ).toBe( 1 )
} )

test( 'oiii ioii iioi iiio is not valid', () => {
  expect( day1.validPassphraseB( 'oiii ioii iioi iiio' ) ).toBe( 0 )
} )