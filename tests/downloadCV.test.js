const { downloadCV } = require('../downloadCV');

describe('download CV', () => {
    test('CV:n the content should appear....', () => {
        expect(() => {
            downloadCV();
        }).toThrow();
    });

    test('CV:n the content should appear....', () => {
        const results = downloadCV('http://localhost:3000/cv/1');
        expect(results).toBe('Content');
    });
});



