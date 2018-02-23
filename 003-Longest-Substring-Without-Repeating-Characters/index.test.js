import lengthOfLongestSubstring from './index';

test('abcda should return 4', () => {
  expect(lengthOfLongestSubstring('abcda')).toEqual(4);
});

test('aabbccdd should return 2', () => {
  expect(lengthOfLongestSubstring('aabbccdd')).toEqual(2);
});

test('aaaaaa should return 1', () => {
  expect(lengthOfLongestSubstring('aaaaaa')).toEqual(1);
});
