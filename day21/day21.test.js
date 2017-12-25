const day21 = require( './day21' )

test( 'rotate', () => {
  expect( day21.rotate( '###/..#/.#.' ) ).toBe( '##./#.#/#..' )
} )

test( 'flip', () => {
  expect( day21.flip( '.#./..#/###' ) ).toBe( '.#./#../###' )
} )

test( 'split', () => {
  expect( day21.split( '#..#/..../..../#..#' ) ).toEqual( [ '#./..', '.#/..', '../#.', '../.#' ] ) 
} )

test( 'split', () => {
  const pattern = '######/##.##./#.##.#/...###/...##./.#.#.#'
  const parts = [ 
   '##/##', '##/.#', '##/#.',
   '#./..', '##/.#', '.#/##',
   '../.#', '.#/.#', '#./.#' ]
  expect( day21.split( pattern ) ).toEqual( parts )
} )

test( 'join( split( x ) ) yields x ', () => {
  const pattern = '####/.#.#/.#.#/####'
  expect( day21.join( day21.split( pattern ) ) ).toBe( pattern )
} )

test( 'enhance', () => {
  const table = new Map( [ [ '###/.../#..', '####/.#.#/.#.#/####' ] ] )
  const pattern = day21.rotate( day21.flip( '###/.../#..' ) )
  expect( day21.enhance( table )( pattern ) ).toBe( '####/.#.#/.#.#/####' )
} )