import { roundTo } from "./utils.ts";
import { gcd } from "./gcd.ts";

export class Fraction {
  constructor(
  private numerator: number,
  private denominator: number,
) {
  if (denominator === 0) {
    throw new Error("denominator must not be 0");
  }
  this.cancel();
}

  public add(other: Fraction) {
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public subtract(other: Fraction) {
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public multiply(other: Fraction) {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public divide(other: Fraction) {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public potentiate(exponent: number) {
    const newNumerator = this.numerator ** exponent;
    const newDenominator = this.denominator ** exponent;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
  }

  public squareRoot() {
    const newNumerator = Math.sqrt(this.numerator);
    const newDenominator = Math.sqrt(this.denominator);
    this.numerator = newNumerator;
    this.denominator = newDenominator;
  }

  public cancel() {
    const a = new gcd(this.numerator, 0);
    const b = new gcd(this.denominator, 0);
    const divisor = a.gcdEuclid(b);
    this.numerator = this.numerator / divisor;
    this.denominator = this.denominator / divisor;
  }

  public toFloat(precision: number): number {
    return roundTo(this.numerator / this.denominator, precision);
  }

  public toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  public static parse(expression: string): Fraction {
    const parts = expression.split("/");
    if (parts.length != 2) {
      throw new Error(`illegal syntax: "[numerator]/[denominator]" required`);
    }
    const numerator = Number.parseInt(parts[0].trim());
    const denominator = Number.parseFloat(parts[1].trim());
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
      throw new Error(`non-numeric numerator/denominator`);
    }
    return new Fraction(numerator, denominator);
  }
}
