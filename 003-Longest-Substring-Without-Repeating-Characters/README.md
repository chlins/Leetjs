### [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)

#### Spec:
Given a string, find the length of the longest substring without repeating characters.
#### Example:
```
Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

#### Tip:
这题思路和`Add Two Numbers`类似，通过将字符串遍历将值和索引存入hash表中，然后移动索引向后进行比较，后来在网上发现一个快速高效的reduce方法，代码量极少，效率极高。
