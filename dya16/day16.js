const parse = step => {
  const m = step.slice( 0, 1 )
  switch ( m ) {
    case 's': return { move: 'spin', args: [ Number( step.slice( 1 ) ) ] } 
    case 'x': return { move: 'exchange', args: step.slice( 1 ).split( /\// ).map( Number ) }
    case 'p': return { move: 'partner', args: step.slice( 1 ).split( /\// ) }
  }
}

const spin = ( list, steps ) => [ ...list.slice( -steps ), ...list.slice( 0, -steps ) ].forEach( ( p, i ) => list[ i ] = p )

const exchange = ( list, a, b ) => {
  const tmp = list[ a ]
  list[ a ] = list[ b ]
  list[ b ] = tmp
}

const partner = ( list, a, b ) => {
  const
    ai = list.findIndex( x => x === a ),
    bi = list.findIndex( x => x === b )
  exchange( list, ai, bi )
}

const moves = {
  spin: spin,
  exchange: exchange,
  partner: partner
}

const move = m => moves[ m ]( )

const dance = ( programs, input, repeats = 1 ) => {
  const steps = input.map( parse )
  let group = [ ...programs ]
  for ( let i = 0; i < repeats; i++ ) {    
    steps.forEach( ( { move, args } ) => moves[ move ]( group, ...args ) )
    // if ( group.join( '' ) === programs ) console.log( `Repeats every ${i}:th time` )
  }
  return group.join( '' )
}

module.exports = { dance }