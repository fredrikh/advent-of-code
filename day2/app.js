const day2 = require('./day2')
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString()

console.log( day2.checksumA( input ) )
console.log( day2.checksumB( input ) )