const parse = ( line, index ) => {
  let [ _, x, y, z, vx, vy, vz, ax, ay, az ] = /p=<(-?\d+),(-?\d+),(-?\d+)>, v=<(-?\d+),(-?\d+),(-?\d+)>, a=<(-?\d+),(-?\d+),(-?\d+)>/.exec( line )
  return {
    id: index,
    p: [ x, y, z ].map( Number ), 
    v: [ vx, vy, vz ].map( Number ), 
    a: [ ax, ay, az ].map( Number ) 
  }
}
const distance = point => point.map( Math.abs ).reduce( ( a, b ) => a + b )
const add = ( [ vx, vy, vz ], [ ux, uy, uz ] ) => [ vx + ux, vy + uy, vz + uz ]
const flatten = arr => [].concat( ...arr )
const unique = arr => [ ...new Set( arr ) ]
const tick = particle => {
  particle.v = add( particle.v, particle.a )
  particle.p = add( particle.p, particle.v )
  particle.d = distance( particle.p )
}
const closestToOrigo = lines => {
  let particles = lines.map( parse )  
  for ( let ticks = 0; ticks < 1000; ticks++ ) particles.forEach( tick )
  particles.sort( ( a, b ) => a.d - b.d  )
  return particles[ 0 ].id
}
const collided = ( positions, particle ) => {
  const p = particle.p.toString()
  if ( positions.has( p ) ) positions.set( p, positions.get( p ).concat( [ particle.id ] ) )
  else positions.set( p, [ particle.id ] )
  return positions
}
const leftAfterCollisions = lines => { 
  let particles = lines.map( parse )
  for ( let ticks = 0; ticks < 1000; ticks++ ) {
    particles.forEach( tick )
    let collisions = particles.reduce( collided, new Map() )
    let collidedIds = unique( flatten( [ ...collisions.values() ].filter( x => x.length > 1 ) ) )
    particles = particles.filter( p => !collidedIds.includes( p.id ) )
  }
  return particles.length
}

module.exports = { closestToOrigo, leftAfterCollisions }