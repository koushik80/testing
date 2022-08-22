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

// less than, greater than or equal

test('should be under 2000', () => {
  const load1 = 500;
  const load2 = 900;
  expect(load1 + load2).toBeLessThan(2000);

});

test('should be under 2000 or equal', () => {
  const load1 = 1100;
  const load2 = 900;
  expect(load1 + load2).toBeLessThanOrEqual(2000);

});

// regex

test('There is no R in Koushik', () => {
  expect('Koushik').not.toMatch(/R/);
});

// Arrays

test('Admin should be usernames', () => {
  usernames = ['koushik', 'dey', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    });
});