const day8 = require( './day8' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day8.run( input ) )