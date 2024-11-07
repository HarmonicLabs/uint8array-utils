import { concatUint8Array } from "../concat";

describe("concat", () => {

    test("concat no args", () => {
        expect(concatUint8Array()).toEqual(new Uint8Array([]));
    });

    test("concat not all Uint8Array", () => {
        expect(
            concatUint8Array(
                new Uint8Array([1, 2]), 
                new Uint8Array([3, 4]), 
                "nope" as any
            )
        )
        .toEqual(new Uint8Array([]));
    });

    test("concat one chunk", () => {
        const a = new Uint8Array([1, 2, 3]);
        const b = concatUint8Array(a);
        expect( b ).not.toBe(a);
        expect( b ).toEqual(a);
    });

    test("concat two chunks", () => {
        const a = new Uint8Array([1, 2]);
        const b = new Uint8Array([3, 4]);
        const c = new Uint8Array([1, 2, 3, 4]);
        expect( concatUint8Array(a, b) ).toEqual(c);
    });
})