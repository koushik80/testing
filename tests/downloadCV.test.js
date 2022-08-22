const { downloadCV } = require('../downloadCV');

describe('download CV', () => {
    test('CV:n the content should appear....', () => {
        expect(() => {
            downloadCV();
        }).toThrow();

    });
});



