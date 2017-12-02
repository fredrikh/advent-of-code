'use strict'

const add = ( a, b ) => a + b
const desc = ( a, b ) => b - a
const diff = row => Math.max( ...row ) - Math.min( ...row )
const divDiff = row => {
  const sorted = [ ...row ].sort( desc )
  return findQuotient( sorted )
} 
const findQuotient = ( [ dividend, ...divisors ] ) => {
  if ( !divisors || !divisors.length ) throw 'Insanity'
  const dividable = divisor => !( dividend % divisor )
  const divisor = divisors.find( dividable )
  return divisor ? dividend / divisor : findQuotient( divisors )
}
const toNumbers = rows => {
  return rows.split( /\n/ )
    .map( row => row.split( /\s/ )
    .map( Number ) )
}
const checksum = ( input, alg ) => {
  return toNumbers( input )
    .map( alg )
    .reduce( add )
}

module.exports = {
  checksumA: input => checksum( input, diff ),
  checksumB: input => checksum( input, divDiff )
}