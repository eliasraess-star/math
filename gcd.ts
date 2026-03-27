export class gcd {
    constructor(
        private a: number,
        private b: number,
    ) {}

    public gcdBruteForce(other: gcd): number {
        const maxI = Math.min(this.a, other.a);
        let result = 1;
        for (let i = 1; i <= maxI; i++) {
            if (this.a % i === 0 && other.a % i === 0) {
                result = i;
            }
        }
        return result;
    }

    public gcdEuclid(other: gcd): number {
        let a = this.a;
        let b = other.a;
        while (a !== b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
        return a;
    }
}