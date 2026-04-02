import { assertEquals } from "@std/assert";
import { gcd } from "./gcd.ts";

const gcdTests = [
    { a: 1, b: 1, gcd: 1 },
    { a: 1, b: 2, gcd: 1 },
    { a: 2, b: 2, gcd: 2 },
    { a: 3, b: 4, gcd: 1 },
    { a: 6, b: 9, gcd: 3 },
    { a: 12, b: 8, gcd: 4 },
    { a: 81, b: 36, gcd: 9 },
];

Deno.test("gcdBruteForce table-driven", () => {
    for (const { a, b, gcd: expected } of gcdTests) {
        const x = new gcd(a, 0);
        const y = new gcd(b, 0);
        assertEquals(x.gcdBruteForce(y), expected);
    }
});

Deno.test("gcdEuclid table-driven", () => {
    for (const { a, b, gcd: expected } of gcdTests) {
        const x = new gcd(a, 0);
        const y = new gcd(b, 0);
        assertEquals(x.gcdEuclid(y), expected);
    }
});
