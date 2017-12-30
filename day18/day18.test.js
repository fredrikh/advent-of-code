const day18 = require( './day18' )

test( 'tablet', () => {
  const program = 
    `set a 1
    add a 2
    mul a a
    mod a 5
    snd a
    set a 0
    rcv a
    jgz a -1
    set a 1
    jgz a -2`.split( /\n/ ).map( s => s.trim() )
  expect( day18.runA( program ) ).toBe( 4 )
} )
