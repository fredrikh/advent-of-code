const day1 = require( './day1' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString()

console.log( day1.captchaReaderA( input ) )
console.log( day1.captchaReaderB( input ) )