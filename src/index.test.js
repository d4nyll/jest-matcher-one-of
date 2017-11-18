require('.');

test('Happy Path', () => {
  expect(1).toBeOneOf([1, 2]);
  expect(1).not.toBeOneOf([2, 3, 4]);
});

test('Unhappy Path', () => {
  expect(() => expect(1).not.toBeOneOf([1, 2])).toThrow();
  expect(() => expect(1).toBeOneOf([2, 3, 4])).toThrow();
});

test('Accepts a single value as an array', () => {
  expect(1).toBeOneOf(1);
  expect(1).not.toBeOneOf(2);
});
