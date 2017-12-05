const day5 = require( './day5' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' )
  .toString()
  .split( /\n/ )
  .map( Number )

console.log( day5.mazeStepsA( input ) )
console.log( day5.mazeStepsB( input ) )
