const day9 = require( './day9' )

// self-contained pieces of garbage
test( 'empty garbage', () => {
  expect( day9.groupCount( '<>' ) ).toBe( 0 )
})

test( 'garbage containing random characters', () => {
  expect( day9.groupCount( '<random characters>' ) ).toBe( 0 )
})

test( 'extra < are ignored', () => {
  expect( day9.groupCount( '<<<<>' ) ).toBe( 0 )
})

test( 'first > is canceled', () => {
  expect( day9.groupCount( '<!!>' ) ).toBe( 0 )
})

test( 'second ! is canceled', () => {
  expect( day9.groupCount( '<>' ) ).toBe( 0 )
})

test( 'second ! and the first > are canceled', () => {
  expect( day9.groupCount( '<!!!>{}>' ) ).toBe( 0 )
})

test( 'ends at the first  ', () => {
  expect( day9.groupCount( '<{o"i!a,<{i<a>' ) ).toBe( 0 )
})
// Count groups 
test( '1 group', () => {
  expect( day9.groupCount( '{}' ) ).toBe( 1 )
})

test( '3 groups', () => {
  expect( day9.groupCount( '{{{}}}' ) ).toBe( 3 )
})

test( '3 groups', () => {
  expect( day9.groupCount( '{{},{}}' ) ).toBe( 3 )
})

test( '6 groups', () => {
  expect( day9.groupCount( '{{{},{},{{}}}}' ) ).toBe( 6 )
})

test( '1 group (which itself contains garbage)', () => {
  expect( day9.groupCount( '{<{},{},{{}}>}' ) ).toBe( 1 )
})

test( '1 group', () => {
  expect( day9.groupCount( '{<a>,<a>,<a>,<a>}' ) ).toBe( 1 )
})

test( '5 groups', () => {
  expect( day9.groupCount( '{{<a>},{<a>},{<a>},{<a>}}' ) ).toBe( 5 )
})

test( '2 groups (since all but the last > are canceled)', () => {
  expect( day9.groupCount( '{{<!>},{<!>},{<!>},{<a>}}' ) ).toBe( 2 )
})
// Score
test( '{} yeilds score 1}', () => {
  expect( day9.score( '{}' ) ).toBe( 1 )
})

test( 'score of 1 + 2 + 3 = 6', () => {
  expect( day9.score( '{{{}}}' ) ).toBe( 6 )
})

test( '1 + 2 + 2 = 5', () => {
  expect( day9.score( '{{},{}}' ) ).toBe( 5 )
})

test( '1 + 2 + 3 + 3 + 3 + 4 = 16', () => {
  expect( day9.score( '{{{},{},{{}}}}' ) ).toBe( 16 )
})

test( 'score of 1', () => {
  expect( day9.score( '{<a>,<a>,<a>,<a>}' ) ).toBe( 1 )
})

test( 'score of 1 + 2 + 2 + 2 + 2 = 9', () => {
  expect( day9.score( '{{<ab>},{<ab>},{<ab>},{<ab>}}' ) ).toBe( 9 )
})

test( 'score of 1 + 2 + 2 + 2 + 2 = 9', () => {
  expect( day9.score( '{{<!!>},{<!!>},{<!!>},{<!!>}}' ) ).toBe( 9 )
})

test( 'score of 1 + 2 = 3', () => {
  expect( day9.score( '{{<a!>},{<a!>},{<a!>},{<ab>}}' ) ).toBe( 3 )
})