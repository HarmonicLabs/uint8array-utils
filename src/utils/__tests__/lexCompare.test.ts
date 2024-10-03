import { fromAscii } from "../../ascii";
import { lexCompare } from "../index";

test("hello, hello_there", () => {

    const arr = [
        fromAscii("hello_there"),
        fromAscii("hello"),
    ];
    const sorted = [
        fromAscii("hello"),
        fromAscii("hello_there"),
    ];

    expect( arr.sort( lexCompare ) ).toEqual( sorted );
})