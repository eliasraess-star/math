import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("distance from (0,0) to (3,4) is 5", () => {
  const a = new Point2D(0, 0);
  const b = new Point2D(3, 4);
  assertEquals(a.distanceTo(b), 5);
});

Deno.test("area of circle with radius 5 is roughly 78.54", () => {
  const circle = new Circle(new Point2D(0, 0), 5);
  assertAlmostEquals(circle.area(), 78.54, 0.01);
});

Deno.test("diameter of circle with radius 5 is 10", () => {
  const circle = new Circle(new Point2D(0, 0), 5);
  assertEquals(circle.diameter(), 10);
});

Deno.test("area of rectangle (0,0)-(4,3) is 12", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  assertEquals(rect.area(), 12);
});

Deno.test("circumference of rectangle (0,0)-(4,3)", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  assertEquals(rect.circumference(), 20);
});

Deno.test("diagonal of rectangle (0,0)-(3,4) is 5", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(3, 4));
  assertEquals(rect.diagonal(), 5);
});
Deno.test("circumference of circle with radius 5 is about 31.42", () => {
  const circle = new Circle(new Point2D(0, 0), 5);
  assertAlmostEquals(circle.circumference(), 31.42, 0.01);
});