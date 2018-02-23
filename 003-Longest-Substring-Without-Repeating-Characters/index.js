/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const hashMap = {};
  let left = 0;
  // reduce
  return s.split('').reduce((max, value, index) => {
    left = hashMap[value] >= left ? hashMap[value] + 1 : left;
    hashMap[value] = index;
    return Math.max(max, (index - left) + 1);
  }, 0);
};

export default lengthOfLongestSubstring;
