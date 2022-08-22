const functions = require('../functions');

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//toBeTruthy

test('Should be truthy', () => {
  expect(functions.checkValue(2)).toBeTruthy();
});

//toEqual

test('User should be Koushik Dey object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Koushik',
    lastName: 'Dey'
  });
});

