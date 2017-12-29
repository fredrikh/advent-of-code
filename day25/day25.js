const directions = { left: -1, right: 1 }
const read = ( tape, cursor ) => tape.has( cursor )
const write = ( tape, cursor, val ) => { 
  val ? tape.add( cursor ) : tape.delete( cursor )
  return tape
}
const createTransition = ( v0, d0, s0, v1, d1, s1 ) => {
  return ( tape, cursor ) => {    
    return read( tape, cursor ) 
      ? { label: s1, cursor: cursor + d1, tape: write( tape, cursor, v1 ) }
      : { label: s0, cursor: cursor + d0, tape: write( tape, cursor, v0 ) }
  }
}    
const parse = input => {
  const 
    parts = input.split( /\n\n/ ),
    rxInitialState = /([A-Z])\.\n.+ (\d+)/,
    [ , initial, steps ] = rxInitialState.exec( parts.shift() ),
    transitions = new Map()
  parts.forEach( part => {
    const 
      rxLabel = /in state ([a-z]):/i,
      rxTransition = /(\d).+\n.+(\d).+\n.+(right|left).+\n.+state.([a-z])/gi,
      [ , label ] = rxLabel.exec( part ),
      [ , conditionF, writeF, moveF, transitionF ] = rxTransition.exec( part ),
      [ , conditionT, writeT, moveT, transitionT ] = rxTransition.exec( part )
    transitions.set( label, createTransition( 
        Boolean( Number( writeF ) ), directions[ moveF ], transitionF, 
        Boolean( Number( writeT ) ), directions[ moveT ], transitionT ) 
    )
  } )
  return { initialLabel: initial, steps: Number( steps ), transitions: transitions }
}
const run = input => {
  let 
    { initialLabel, steps, transitions } = parse( input ),
    tape = new Set(),
    state = transitions.get( initialLabel )( tape, 0 )
  while( --steps ) state = transitions.get( state.label )( state.tape, state.cursor )

  return tape.size
}

module.exports = { run }
