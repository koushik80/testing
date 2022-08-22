const { isEven, isOdd } = require('../truthValues');

describe('Even/odd', () => {
    test('Return value is TRUE, if number is even', () => {
        const results = isEven(2);
        expect(results).toBeTruthy();
        expect(results).not.toBeFalsy();
    });
});

describe('Even/odd', () => {
    test('Return value is TRUE, if number is odd', () => {
        const results = isOdd(3);
        expect(results).toBeTruthy();
        expect(results).not.toBeFalsy();
    });
});