const { sum, mul, sub, div } = require('../algebra');

describe('Algebra testing', () => {
    test('counting 1 + 1 = 2', () => {
        expect(sum(1, 1)).toBe(2);
    })

    test('counting 1 * 1 = 1', () => {
        expect(mul(1, 1)).toBe(1);
    })

    test('counting 1 - 1 =,', () => {
        expect(sub(1, 1)).toBe(0);
    })

    test('counting 1/1 = 1', () => {
        expect(div(1, 1)).toBe(1);
    })

    test('Test floating point numbers', () => {
        const results = sum(4.2, 3.2);
        expect(results).toBeGreaterThan(7.0);
    })
});





