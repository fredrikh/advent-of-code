const day5 = require( './day5' )

test( 'it should leave the maze [ 0, 3, 0, 1, -3 ] in five steps', () => { 
  const maze = [ 0, 3, 0, 1, -3 ]
  expect( day5.mazeStepsA( maze ) ).toBe( 5 )
} )

test( 'it should leave the maze [ 0, 3, 0, 1, -3 ] in 10 steps', () => { 
  const maze = [ 0, 3, 0, 1, -3 ]
  expect( day5.mazeStepsB( maze ) ).toBe( 10 )
} )