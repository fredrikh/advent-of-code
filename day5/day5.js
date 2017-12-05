const boundsCheck = ( length ) => ( pos ) => pos > -1 && pos < length
const jumpA = ( m, pos ) => pos + m[ pos ]++
const jumpB = ( m, pos ) => {
  let stepValue = m[ pos ]
  m[ pos ] += stepValue >= 3 ? -1 : 1
  return pos + stepValue
}
const mazeSteps = ( [ ...m ], jump ) => {
  let steps = 1
  let pos = 0
  let inMaze = boundsCheck( m.length )
  while ( inMaze( pos = jump( m, pos ) ) ) steps++
  return steps
}

module.exports = {
  mazeStepsA: ( maze ) => mazeSteps( maze, jumpA ),
  mazeStepsB: ( maze ) => mazeSteps( maze, jumpB )
}
