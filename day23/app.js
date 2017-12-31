const day23 = require( './day23' )
const fs = require( 'fs' )

const program = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

// console.log( day23.runA( program ) )
console.log( day23.runB() )