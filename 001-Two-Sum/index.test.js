import twoSum from './index';

test('[1, 3, 6, 8], 11 should return [1, 3]', () => {
  expect(twoSum([1, 3, 6, 8], 11)).toEqual([1, 3]);
});

test('[], 0 should return []', () => {
  expect(twoSum([], 0)).toEqual([]);
});
