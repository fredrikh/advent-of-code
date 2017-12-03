function* floors() {
  let 
    i = 1, 
    no = 0, 
    prev = 0
  while ( true ) {
    let square = i * i
    yield { no: no, from: prev, to: square }
    prev = square
    i += 2
    no++
  }
}

function* oscillate( n ) {
  let 
    direction = -1,
    i = n
  while ( true ) {
    yield i
    i += direction
    if ( direction === -1 && i === 0 || direction === 1 && i === n ) direction *= -1
  }
}

const floor = ( squareNo ) => {
  let 
    fn = floors(),
    f = 0
  while ( squareNo > ( f = fn.next().value ).to ) ;
  return f
}

const steps = ( steps, limit ) => {
  let osc = oscillate( limit )
  for ( let i = 0; i < steps; i++ ) osc.next()
  return osc.next().value
}

const manhattanDistance = ( squareNo ) => {
  let 
    { no, from } = floor( squareNo ),
    floorSteps = squareNo - from
  return no + steps( floorSteps, no )
}

console.log( manhattanDistance( 347991 ) )

