const day12 = require( './day12' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString().split( /\n/ )

console.log( day12.groupById( 0, input ) )
console.log( day12.groups( input ) )