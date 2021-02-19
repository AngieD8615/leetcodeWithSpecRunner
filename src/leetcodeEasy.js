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

// Max depth of a binary tree
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest 
// path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
/* {
    val: 3, 
    left: {
      val: 9,
      left: null, 
      right: null  
    },
    right: {
      val: 20, 
      left: {
        val: 15, 
        left: null,
        right: null
      },
      right: {
        val: 7, 
        left: null,
        right: null
      }
    }
  }
*/
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

var maxDepth = function(root) {
  
  if (root === null) return 0
  let maxDepth = 0;  

  const helper = (node, depth) => {
    if (node.left === null && node.right === null) {
      maxDepth = Math.max(maxDepth, depth)
      return
    } else {
      if (node.left) {
        helper(node.left, depth + 1)
      }
      if (node.right) {
        helper(node.right, depth + 1)
      }
    }

  }
  helper(root, 1);
  return maxDepth;
};


var minDepth = (root) => {
  if (root === null) return 0
  if (root.left === null || root.right === null) return 1
  let counter = 0
  let minDepth = Number.MAX_VALUE

  const helper = (node) =>{
    // base case -> if the node has no children
    if (node.left === null || node.right === null) {
      counter++
      minDepth = Math.min(counter, minDepth)
      counter--
      return
    }
    if (node.left && counter < minDepth) {
      counter++;
      helper(node.left)
      counter--
    }
    if (node.right && counter < minDepth) {
      counter++
      helper(node.right)
      counter--
    }
    
  }
  helper(root)
  return minDepth
}

// Write a SortedMerge() function that takes two lists, each of which is sorted in increasing order, 
// and merges the two together into one list which is in increasing order. SortedMerge() should return 
// the new list. The new list should be made by splicing together the nodes of the first two lists.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }
  insert(val){
    let newNode = new Node (val)
    if (this.head === null) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }
}

const mergeSortedLinkedList = (l1, l2) => {
  let merged = null
  if (l1.head === null && l2.head === null) {
    return null;
  } else if (l1.head === null && l2.head !== null) {
    return l2
  } else if (l1.head !== null && l2.head === null) {
    return l1
  } else {
    var node1 = l1.head
    var node2 = l2.head

    if (node1.val <= node2.val) {
      merged = new LinkedList();
      merged.insert(node1.val)
      node1 = node1.next
    } else {
      merged = new LinkedList();
      merged.insert(node2.val)
      node2 = node2.next
    }
  }

  while (node1 || node2) {
    if (!node2) {
      merged.insert(node1.val)
      node1 = node1.next;
    } else if (!node1) {
      merged.insert(node2.val)
      node2 = node2.next
    } else {
      if (node1.val <= node2.val) {
        merged.insert(node1.val);
        node1 = node1.next
      } else {
        merged.insert(node2.val);
        node2 = node2.next
      }
    }
  }
  return merged
}