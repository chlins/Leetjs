### [Two sum](https://leetcode.com/problems/two-sum)

#### Spec:
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
#### Example:
```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

#### Tip:
给出一个整数数组，再给定一个目标数字，要求再这个数组中找到两个数字相加的和等于目标数字，并返回这两个数字的索引，并且需要注意不能使用同一个数字两次，即类似返回[1, 1]。

最简单直观的做法可以是遍历所有所有元素相加比较，但是此做法需要两次`for`循环，时间复杂度为`O(n^2)`，因此可以改变做法，既然已知目标值，我们可以通过判断目标值减去元素值得到的值是否在数组内来降低时间复杂度。
