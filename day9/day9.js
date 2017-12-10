const parse = ( stream ) => {
  const startGroup = '{', endGroup = '}', startGarbage = '<', endGarbage = '>', skip = '!'
  let level = 0
  let garbageCount = 0
  let stack = []
  let groups = []
  const top = () => stack[ stack.length - 1 ] || '' 
  for ( let i = 0; i < stream.length; i++ ) {
    let 
      c = stream[ i], 
      t = top()
    if ( c === skip ) {
      i++
    } else if ( c === startGarbage && t !== startGarbage ) {
      stack.push( startGarbage)
    } else if ( c !== endGarbage && t === startGarbage) {
      garbageCount++
    } else if ( c === endGarbage ) {
      stack.pop()
    } else if ( c === startGroup ) {
      stack.push( c )
      groups.push( ++level )
    } else if ( c === endGroup ) {
      stack.pop()
      level--
    }
  }
  return { groups: groups, garbageCount: garbageCount }
}
const sum = ( x, y ) => x + y
const groupCount = ( input ) => parse( input ).groups.length
const garbageCount = ( input ) => parse( input ).garbageCount
const score = ( input ) => parse( input ).groups.reduce( sum )
  
module.exports = {
  isGarbage,
  groupCount,
  garbageCount,
  score,
  parse
}
 