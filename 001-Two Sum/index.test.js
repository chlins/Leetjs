const twoSum = require('./index');

test('[1, 3, 6, 8], 11 should return [1, 3]', () => {
  expect(twoSum([1, 3, 6, 8], 11)).toEqual([1, 3]);
});
