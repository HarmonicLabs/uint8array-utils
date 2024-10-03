
export const enum Ord {
    LT = -1,
    EQ = 0,
    GT = 1
}

export function lexCompare( a: Uint8Array, b: Uint8Array ): Ord
{
    const min = a.length < b.length ? a : b;
    const minLen = min.length;

    for( let i = 0; i < minLen; i++ )
    {
        const _a = a.at(i);
        const _b = b.at(i);
        if( _a === undefined ) return Ord.LT;
        if( _b === undefined ) return Ord.GT;

        if( _a < _b ) return Ord.LT;
        if( _a > _b) return Ord.GT;
        // if( _a === _b ) continue;
    }

    return a.length === b.length ? Ord.EQ :
    (a.length < b.length ? Ord.LT : Ord.GT);
}

export function uint8ArrayEq( a: Uint8Array, b: Uint8Array )
{
    return a.length === b.length && a.every( (n,i) => n === b[i] );
}