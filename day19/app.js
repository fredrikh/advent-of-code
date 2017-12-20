const day19 = require( './day19' )
const fs = require( 'fs' )

const input = fs.readFileSync( __dirname + '/input.txt' )
  .toString()
  .split( /\n/ )
  .map( row => [ ...row ] )
  .filter( row => row.length )

console.log( day19.walk( input ) )