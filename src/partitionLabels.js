/**
 * A string S of lowercase English letters is given. We want to partition this 
 * string into as many parts as possible so that each letter appears in at most 
 * one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
            A       A
             B   B
                C  C
                     D    D
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 
Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.

 */

var partitionLabels = function (S) {
  let ranges = {};
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (!ranges[char]) {
      ranges[char] = [i, i];
    } else {
      ranges[char][1] = i;
    }
  }
  let result = [];
  let start = 0;
  let left = 0;
  let right = ranges[S[left]][1];

  while (left <= S.length) {
    if (left === S.length) {
      result.push(left - start);
      return result;
    }
    if (left > right) {
      result.push(right - start + 1);
      start = left;
      right = ranges[S[left]][1];
    }
    if (right <= ranges[S[left]][1]) {
      right = ranges[S[left]][1];
    }
    left++;
  }
};
