const parseLine = line => {
  const [ reg, op, val, _, condReg, comp, condVal ] = line.split( /\s/ )    
  return { regName: reg, op: op, val: Number( val ), condReg: condReg, comp: comp, condVal: Number( condVal ) }
}

const addRegister = ( instructions, r ) => {
  instructions.forEach( inst => r[ inst.regName ] = r[ inst.condReg ] = 0 )
  return r
}

const operators = {
  inc: ( x, y ) => x + y,
  dec: ( x, y ) => x - y,
  '==': ( x, y ) => x == y,
  '!=': ( x, y ) => x != y,
  '>=': ( x, y ) => x >= y,
  '<=': ( x, y ) => x <= y,
  '>': ( x, y ) => x > y,
  '<': ( x, y ) => x < y
}

const execute = register => instruction => {
  const { regName, op, val, condReg, comp, condVal } = instruction
  if ( operators[ comp ]( register[ condReg ], condVal ) ) {
    register[ regName ] = operators[ op ]( register[ regName ], val )
  }
  return register[ regName ]
}

const run = input => {
  const instructions = input.map( parseLine )
  const register = addRegister( instructions, {} )
  const values = instructions.map( execute( register ) )
  return { highestFinal:Math.max( ...Object.values( register ) ), highestMax: Math.max( ...values ) }
}

module.exports.run = run