const day9 = require( './day9' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' ).toString()

console.log( day9.score( input ) )
console.log( day9.garbageCount( input) ) 