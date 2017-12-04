const isUnique = ( phrase ) => phrase.length === [ ...new Set( phrase ) ].length
const sortLetters = ( word ) => [ ...word ].sort().join( '' )
const phrases = ( input ) => input.split( '\n' ).map( line => line.split( /\s/ ) )
const validPassphrase = ( input ) => phrases( input ).filter( isUnique ).length
const validPassphraseB = ( input ) => phrases( input )
    .map( p => p.map( sortLetters ) )
    .filter( isUnique ).length


module.exports.validPassphrase = validPassphrase
module.exports.validPassphraseB = validPassphraseB