const day7 = require( './day7' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day7.findRoot( input ) )

