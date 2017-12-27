const { List } = require( 'immutable' )

const 
  parseComponents = lines => List( lines.map( line => List( line.split( /\// ).map( Number ) ) ) ),
  oppositePort = ( component, port ) => component.first() === port ? component.last() : component.first(),
  matchPort = port => comp => comp.includes( port ),
  compPair = ( a, b ) => a.last() === b.last() ?  b.first() - a.first() : b.last() - a.last(),
  sum = ( a, b ) => a + b,
  desc = ( a, b ) => b - a,
  first = e => e.first(),
  last = e => e.last()

const build = ( components, port, strength, length ) => {  
  return components
    .filter( matchPort( port ) )
    .flatMap( cmp => build( 
      components.filterNot( e => e.equals( cmp ) ), 
      oppositePort( cmp, port ), 
      strength + cmp.reduce( sum ), 
      length + 1 ) ).push( List( [ strength, length ] ) )  
}

const run = input => {  
  const 
    bridges = build( parseComponents( input ), 0, 0, 0 ),
    strongest = bridges.maxBy( first ).first(),
    longest = bridges.sort( compPair ).first().first()    
  return { strongest: strongest, longest: longest }
}

module.exports = { run }