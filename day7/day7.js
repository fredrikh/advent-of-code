const parseLine = ( line ) => {
  const parts = line.split( '->' )
  const [ ,name, weight ] = /(\S+)\s\((\d+)\)/.exec( parts[ 0 ] )
  const children = parts.length > 1 ? parts[1].split( ',' ).map( c => c.trim() ) : []
  children.push( name )
  return children
}

const flatten = ( arr ) => [].concat( ...arr )

const findUniqueElement = ( list ) => {
  const countNames = ( counter, name ) => {
    if ( name in counter ) counter[ name ]++
    else counter[ name ] = 1
    return counter
  }
  return Object.entries( list.reduce( countNames, {} ) )
    .find( ( [ k, v ] ) => v === 1 )[ 0 ]
}
const findRoot = ( input ) => findUniqueElement( flatten( input.map( parseLine ) ) )
  
module.exports.findRoot = findRoot
