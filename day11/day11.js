const dir = {
  'n' : [ 0, 1, -1 ],
  'ne': [ 1, 0, -1 ],
  'se': [ 1, -1, 0 ],
  's' : [ 0, -1, 1 ],
  'sw': [ -1, 0, 1 ],
  'nw': [ -1, 1, 0 ]
}

const move = ( currentPos, direction ) => {
  const 
    [ x0, y0, z0 ] = currentPos,
    [ x1, y1, z1 ] = dir[ direction ]
  return [ x0 + x1, y0 + y1, z0 + z1 ]
}

const distanceFromOrigo = ( [ x, y, z ] ) => ( Math.abs( x ) +  Math.abs( y ) +  Math.abs( z ) ) / 2

const shortestPath = ( steps ) => distanceFromOrigo( steps.reduce( move, [ 0, 0, 0 ] ) )

const maxDistance = ( steps ) => {
  let pos = [ 0, 0, 0 ]
  let distances = []
  steps.forEach( step => {
    pos = move( pos, step )
    distances.push( distanceFromOrigo( pos ) )
  } )
  return Math.max( ...distances )
}

module.exports = { 
  shortestPath,
  maxDistance
}
