import { assertEquals } from "@std/assert";
import { gcd } from "./gcd.ts";

Deno.test("gcdBruteForce of 1 and 1 is 1", () => {
    const a = new gcd(1, 0);
    const b = new gcd(1, 0);
    assertEquals(a.gcdBruteForce(b), 1);
});

Deno.test("gcdBruteForce of 12 and 8 is 4", () => {
    const a = new gcd(12, 0);
    const b = new gcd(8, 0);
    assertEquals(a.gcdBruteForce(b), 4);
});

Deno.test("gcdEuclid of 1 and 1 is 1", () => {
    const a = new gcd(1, 0);
    const b = new gcd(1, 0);
    assertEquals(a.gcdEuclid(b), 1);
});

Deno.test("gcdEuclid of 12 and 8 is 4", () => {
    const a = new gcd(12, 0);
    const b = new gcd(8, 0);
    assertEquals(a.gcdEuclid(b), 4);
});

Deno.test("gcdEuclid of 6 and 9 is 3", () => {
    const a = new gcd(6, 0);
    const b = new gcd(9, 0);
    assertEquals(a.gcdEuclid(b), 3);
});
