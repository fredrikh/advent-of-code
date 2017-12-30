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

test( 'duo tablet', () => {
  const program = 
    `snd 1
    snd 2
    snd p
    rcv a
    rcv b
    rcv c
    rcv d`.split( /\n/ ).map( s => s.trim() )
  expect( day18.runB( program ) ).toBe( 3 )
} )