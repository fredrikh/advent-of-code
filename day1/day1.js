'use strict'

const inverseCaptcha = ( input, steps ) => {
  const 
    numbers = input.split( '' ).map( Number ),
    ci = index => index % numbers.length,
    sums = []

  for ( let i = 0, j = steps; i < numbers.length; i++ , j = ci( i + steps ) )    
    if ( numbers[ i ] === numbers[ j ] ) sums.push( numbers[ i ] )
  
  return sums.reduce( ( a, b ) => a + b, 0 )
}

module.exports = {
  inverseCaptchaA: input => inverseCaptcha(input, 1),
  inverseCaptchaB: input => inverseCaptcha(input, input.length / 2)
}
