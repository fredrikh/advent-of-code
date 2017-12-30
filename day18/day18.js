const commands = {  
  set: ( p, x, y ) => p.register[ x ] = getVal( p, y ),
  add: ( p, x, y ) => p.register[ x ] += getVal( p, y ),
  mul: ( p, x, y ) => p.register[ x ] *= getVal( p, y ),
  mod: ( p, x, y ) => p.register[ x ] %= getVal( p, y ),
  jnz: ( p, x, y ) => getVal( p, x ) && setJmp( p, y ),
  jgz: ( p, x, y ) => getVal( p, x ) > 0 && setJmp( p, getVal( p, y ) ),
  snd: ( p, x )    => p.played.push( getVal( p, x ) ),
  rcv: ( p, x )    => { if ( getVal( p, x ) !== 0 ) halt( p ) }
}
const next = p => {
  if ( p.jmp ) {
    p.pc += p.jmp
    p.jmp = 0
  } else p.pc++
  return p.pc < p.instructions.length
}
const halt = ( p ) => p.pc = p.instructions.length
const setJmp = ( p, step ) => p.jmp = step
const getVal = ( p, x ) => /[a-z]/.test( x ) ? p.register[ x ] : Number( x )
const executeCmd = p => {
  const 
    { instructions, pc } = p,
    [ cmd, ...args ] = instructions[ pc ]
  commands[ cmd ]( p, ...args )
  return p
}
const getRegisters = ( acc, [ _, a, b ] ) => {
  if ( /[a-z]/.test( a ) ) acc[ a ] = 0
  if ( b !== undefined && /[a-z]/.test( b ) ) acc[ b ] = 0
  return acc
}
const runA = input => {
  const 
    instructions = input.map( line => line.split( /\s/ ) ),
    register = instructions.reduce( getRegisters, {} ),    
    program = { register: register, pc: 0, jmp: 0, instructions: instructions, played: [] }
  while ( next( executeCmd( program ) ) ) 
    ;
  return program.played[ program.played.length - 1 ]
}

module.exports = { runA }

