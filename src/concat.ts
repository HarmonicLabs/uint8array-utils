
export function concatUint8Array( ...chunks: Uint8Array[] ): Uint8Array
{
    // if(!Array.isArray(chunks)) return new Uint8Array([]);
    if(!chunks.every( chunk => chunk instanceof Uint8Array )) return new Uint8Array([]);
    if( chunks.length <= 0 ) return new Uint8Array([]);
    
    if( chunks.length === 1 ) return Uint8Array.prototype.slice.call( chunks[0] );

    const len = chunks.reduce( (acc, chunk) => acc + chunk.length, 0 );
    const result = new Uint8Array( len );
    let offset = 0;
    const nChunks = chunks.length;
    for( let i = 0, chunk: Uint8Array; i < nChunks; )
    {
        chunk = chunks[i++];
        result.set( chunk, offset );
        offset += chunk.length;
    }
    return result;
}