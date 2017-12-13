const day13 = require( './day13' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day13.totalSeverity( input ) )
console.log( day13.offset( input ) )