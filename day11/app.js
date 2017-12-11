const day11 = require( './day11' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( ',' )

console.log( day11.shortestPath( input ) )
console.log( day11.maxDistance( input ) )
