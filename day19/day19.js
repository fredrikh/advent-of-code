const walk = pipes => { 
  const 
    validMove = ( [ x, y ] ) => x >= 0 && x < pipes[ 0 ].length && y >= 0 && y < pipes.length && pipes[ y ][ x ] !== ' ',    
    turns = ( [ x, y ] ) => [ [ y, x ], [ -y, -x ] ],
    add = ( [ x0, y0 ], [ x1, y1 ] ) => [ x0 + x1, y0 + y1 ],
    get = ( [ x, y ] ) => pipes[ y ][ x ],
    isLetter = c => /[a-z]/i.test( c ) 
  let 
    pos = [ pipes[ 0 ].findIndex( x => x === '|' ), 0 ],
    dir = [ 0, 1 ],
    letters = '',
    steps = 0
  while ( validMove( pos ) ) {
    let c =  get( pos )
    if ( isLetter( c ) ) letters +=  c
    if ( c === '+' ) dir =  turns( dir ).find( p => validMove( add( p, pos ) ) )       
    pos = add( pos, dir )
    steps++
  }
  return [ steps, letters ]
}

module.exports = { walk }
