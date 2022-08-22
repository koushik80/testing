const { greet } = require ('../util');

describe ('Greet Feature', () => {
    it ('Should get the greet message',() => {
        const results = greet ('Jane');
        expect(results).toBe('Hello Jane');
    });
});

describe('.toMatchObject(object)', () => {
    const houseForSale = {
        bath: true,
        bedrooms: 4,
        kitchen: {
            amenities: ['oven', 'stove', 'washer'],
            area: 20,
            wallColor: 'white',
        },

    };

    const desiredHouse = {
        bath: true,
        kitchen: {
            amenities: ['oven', 'stove', 'washer'],
            wallColor: expect.stringMatching(/white|yellow/),
        },
    };
    test('The house has my desired features', () => {
        expect(houseForSale).toMatchObject(desiredHouse);
    });
});