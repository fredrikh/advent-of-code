const day24 = require( './day24' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day24.run( input ) )
