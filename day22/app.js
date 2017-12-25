const day22 = require( './day22' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day22.runA( input, 10000 ) )
console.log( day22.runB( input, 10000000 ) )