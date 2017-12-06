const day6 = require( './day6' )
const fs = require( 'fs' )

const memoryBanks = fs.readFileSync( __dirname + '/input.txt' )
  .toString()
  .split( /\s/ )
  .map( Number )

console.log( day6.reallocate( memoryBanks ) )