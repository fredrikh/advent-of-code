const getLevel = n => {
  const nextOdd = x => x + ( x % 2 ? 2 : 1 )
  const isEven = x => x % 2 === 0
  const sqrt = Math.sqrt( n )
  let i = Math.trunc( sqrt )
  if ( sqrt - i > 0 || isEven( i ) ) i = nextOdd( i )

  return { level: Math.trunc( i / 2 ), stepsToCorner: i * i - n } 
}

const stepsToZero = ( range, stepsToCorner ) => Math.abs( stepsToCorner % ( range * 2 ) - range )

const distance = ( n ) => {
  const { level, stepsToCorner } = getLevel( n )
  return level + stepsToZero( level, stepsToCorner )
}

console.log( distance( 347991 ) )
