const day18 = require( './day18' )
const fs = require( 'fs' )

const program = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day18.runA( program ) )

