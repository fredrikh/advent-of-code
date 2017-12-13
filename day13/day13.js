const 
  toMap = input => new Map( input.map( line => line.split( ':' ).map( Number ) ) ),
  detected = ( range,  time ) => !Math.abs( ( time + ( range - 1 ) ) % ( ( range - 1 ) * 2 ) - ( range - 1 ) ),
  severity = ( offset = 0 ) => ( acc, [ time, range ] ) =>  acc + ( detected( range, time + offset ) ? range * ( time + offset ) : 0 ),
  totalSeverity = input => [ ...toMap( input ) ].reduce( severity(), 0 ),
  offset = input => {
  const fw = toMap( input )
  let delay = 0
  while ( [ ...fw ].reduce( severity( ++delay ), 0 ) > 0 ) ;
  return delay
}

module.exports = { totalSeverity, offset }