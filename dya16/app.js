const day16 = require( './day16' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /,/ )

console.log( day16.dance( 'abcdefghijklmnop', input, 100 % 36 ) )
