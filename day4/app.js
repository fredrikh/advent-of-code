const day4 = require( './day4' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString()

console.log( day4.validPassphrase( input ) )
console.log( day4.validPassphraseB( input ) )