const commands = {  
  set: ( p, x, y ) => p.register[ x ] = getVal( p, y ),
  add: ( p, x, y ) => p.register[ x ] += getVal( p, y ),
  mul: ( p, x, y ) => p.register[ x ] *= getVal( p, y ),
  mod: ( p, x, y ) => p.register[ x ] %= getVal( p, y ),
  jnz: ( p, x, y ) => getVal( p, x ) && setJmp( p, y ),
  jgz: ( p, x, y ) => getVal( p, x ) > 0 && setJmp( p, getVal( p, y ) ),
  snd: ( p, x )    => write( p, getVal( p, x ) ),
  rcv: ( p, x )    => {
    let val = read( p )
    if ( val === undefined ) pause( p )
    else p.register[ x ] = val
  }  
}
const next = p => {
  if ( p.paused ) return false
  if ( p.jmp ) {
    p.pc += p.jmp
    p.jmp = 0
  } else p.pc++
  return p.pc < p.instructions.length
}
const setJmp = ( p, step ) => p.jmp = step
const getVal = ( p, x ) => /[a-z]/.test( x ) ? p.register[ x ] : Number( x )
const read = p  => p.in.shift()
const write = ( p, x ) => { 
  p.out.push( x )
  if ( p.notify ) p.notify()
  p.writes++
}
const notify = ( p ) => () => resume( p )
const pause = p => p.paused = true
const resume = p => p.paused = false
const prog = ( id, reg ) => Object.assign( {}, reg, { p: id } ) 
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
    r = [],
    w = [],   
    program = { register: register, pc: 0, jmp: 0, instructions: instructions, in: r, out: w }
  while ( next( executeCmd( program ) ) ) 
    ;
  return program.out[ program.out.length - 1 ]
}
const runB = input => {
  const 
    instructions = input.map( line => line.split( /\s/ ) ),
    register = instructions.reduce( getRegisters, {} ),
    rw0 = [],
    rw1 = [],  
    p0 = { register: prog( 0, register ), pc: 0, jmp: 0, instructions: instructions, in: rw0, out: rw1, writes: 0 },
    p1 = { register: prog( 1, register ), pc: 0, jmp: 0, instructions: instructions, in: rw1, out: rw0, writes: 0 }
    p0.notify = notify( p1 )
    p1.notify = notify( p0 )
  while ( next( executeCmd( p0 ) ) || next( executeCmd( p1 ) ) ) 
    ;
  return p1.writes
}

module.exports = { runA, runB }

