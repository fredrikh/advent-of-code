const day20 = require( './day20' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day20.closestToOrigo( input ) )

console.log( day20.leftAfterCollisions( input ) )

