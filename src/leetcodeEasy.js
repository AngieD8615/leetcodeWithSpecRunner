// Many of these problems are straight from leetcode.com

// Defanging an IP address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
var defangIPaddr = function(address) {
    return address.split(".").join("[.]")
};

// Number of Good Pairs
// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// Example 1:     0 1 2 3 4 5
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]  -> 3 + 2 + 1  = 6
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0
 
// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var numIdenticalPairs = function(nums) {
  if (nums.length <= 1) return 0
  nums = nums.sort((a, b) => a - b)
  
  let count = 0;
  let left = 0
  let right = 1
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      if (right === nums.length - 1) {
        let diff = right - left
        count += (diff + 1) * (diff) / 2
      }
      right++
    } else {
      let diff = right - left
      count += diff * (diff -1) / 2
      left = right
      right++
    }
  }
  return count
};

// Jewels and Stones
// You're given strings jewels representing the types of stones 
// that are jewels, and stones representing the stones you have. 
// Each character in stones is a type of stone you have. You want 
// to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different 
// type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

var numJewelsInStones = function(jewels, stones) {
  let jewelSet = new Set;
  let count = 0
  for (let char of jewels) {
    jewelSet.add(char)
  }
  for (let char of stones) {
    if (jewelSet.has(char)) {
      count++
    }
  }
  return count;
};