import { fromBase64, toBase64 } from "../base64";
import { fromUtf8, toUtf8 } from "../utf8";

// https://datatracker.ietf.org/doc/html/rfc4648#section-10

describe("base64", () => {

    function testUtf8( str: string, expected: string )
    {
        test(`${str} -> ${expected}`, () => {

            // test toBase64
            expect( toBase64( fromUtf8( str ) ) ).toBe( expected );
    
            // test fromBase64
            expect( toUtf8( fromBase64( expected ) ) ).toBe( str );
        });
    }

    testUtf8( "", "" );
    testUtf8( "f", "Zg==" );
    testUtf8( "fo", "Zm8=" );
    testUtf8( "foo", "Zm9v" );
    testUtf8( "foob", "Zm9vYg==" );
    testUtf8( "fooba", "Zm9vYmE=" );
    testUtf8( "foobar", "Zm9vYmFy" );
    testUtf8( "Hello, World!", "SGVsbG8sIFdvcmxkIQ==" );
    // https://en.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog
    testUtf8( "The quick brown fox jumps over the lazy dog.", "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=" );

    testUtf8( "a", "YQ==" );
    testUtf8( "ab", "YWI=" );
    testUtf8( "abc", "YWJj" );
    testUtf8( "abcd", "YWJjZA==" );
    testUtf8( "abcde", "YWJjZGU=" );
    testUtf8( "abcdef", "YWJjZGVm" );
    testUtf8( "abcdefg", "YWJjZGVmZw==" );
    testUtf8( "abcdefgh", "YWJjZGVmZ2g=" );

    testUtf8( "to be or not to be", "dG8gYmUgb3Igbm90IHRvIGJl" );
    testUtf8( "to be or not to be, that is the question", "dG8gYmUgb3Igbm90IHRvIGJlLCB0aGF0IGlzIHRoZSBxdWVzdGlvbg==" );
})