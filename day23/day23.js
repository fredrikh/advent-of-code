const commands = {  
  set: ( p, x, y ) => p.register[ x ] = getVal( p, y ),
  sub: ( p, x, y ) => p.register[ x ] -= getVal( p, y ),
  mul: ( p, x, y ) => { 
    p.register[ x ] *= getVal( p, y )
    p.mulCount++
  },
  mod: ( p, x, y ) => p.register[ x ] %= getVal( p, y ),
  jnz: ( p, x, y ) => getVal( p, x ) && setJmp( p, y )
}
const next = p => { 
  if ( p.jmp ) {
    p.pc += p.jmp
    p.jmp = 0
  } else p.pc++
  return p.pc < p.instructions.length
}
const setJmp = ( p, step ) => p.jmp = Number( step )
const getVal = ( p, x ) => /[a-z]/.test( x ) ? p.register[ x ] : Number( x )
const executeCmd = p => {
  const [ cmd, ...args ] = p.instructions[ p.pc ]
  commands[ cmd ]( p, ...args )
  return p
}
const isPrime = num => {
  for( let i = 2, s = Math.sqrt(num); i <= s; i++ )
      if( num % i === 0 ) return false 
  return num !== 1
}
const runA = input => {
  const 
    instructions = input.map( line => line.split( /\s/ ) ),
    register = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0},    
    program = { register: register, pc: 0, jmp: 0, instructions: instructions, mulCount: 0 }
  while ( next( executeCmd( program ) ) ) 
    ;
  return program.mulCount
}
const runB = () => {
  let composite = 0
  for ( let i = 108400; i <= 125400; i = i + 17 ) if ( !isPrime( i ) ) composite++
  
  return composite
}
module.exports = { runA, runB }




