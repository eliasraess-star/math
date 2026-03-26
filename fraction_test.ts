import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("potentiate 4 to the power of 2 is 16", () => {
  // Arrange
  const fraction = new Fraction(4, 1);

  // Act
  fraction.potentiate(2);

  // Assert
  assertEquals(fraction.toFloat(0.1), 16);
});

Deno.test("square root of 16 is 4", () => {
  // Arrange
  const fraction = new Fraction(16, 1);

  // Act
  fraction.squareRoot();

  // Assert
  assertEquals(fraction.toFloat(0.1), 4);
});

Deno.test("2.1 + 2.2 equals 4.3", () => {
  // Arrange
  const left = new Fraction(21, 10);
  const right = new Fraction(22, 10);

  // Act
  left.add(right);

  // Assert
  assertEquals(left.toFloat(0.1), 4.3);
});

Deno.test("5/3 - 1/3 is roughly 1.33", () => {
  const left = new Fraction(5, 3);
  const right = new Fraction(1, 3);
  left.subtract(right);
  assertAlmostEquals(left.toFloat(0.01), 1.33);
});

Deno.test("2/3 * 3/4 is 0.5", () => {
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);
  left.multiply(right);
  assertEquals(left.toFloat(0.01), 0.5);
});

Deno.test("1/2 / 1/4 is 2.0", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);
  left.divide(right);
  assertEquals(left.toFloat(0.1), 2.0);
});

Deno.test("toString of 3/4 is '3/4'", () => {
  assertEquals(new Fraction(3, 4).toString(), "3/4");
});

Deno.test("parse '3 / 4' gives 0.75", () => {
  assertEquals(Fraction.parse("3 / 4").toFloat(0.01), 0.75);
});
Deno.test("constructor throws on denominator 0", () => {
  assertThrows(() => new Fraction(3, 0), Error);
});

Deno.test("parse throws on denominator 0", () => {
  assertThrows(() => Fraction.parse("3/0"), Error);
});