/**
 * @param {number[]} givenArr
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (givenArr, target) => {
  const hashMap = {};
  let i = 0;
  for (; i < givenArr.length; i += 1) {
    if (hashMap[target - givenArr[i]] !== undefined) {
      return [hashMap[target - givenArr[i]], i];
    }
    hashMap[givenArr[i]] = i;
  }
  return [];
};

module.exports = twoSum;
