/*
Divide and Conquer 
Count the Zeros 
Given an arr of 1s and 0s where 1s come first and are followed by 0s
find the number of 0s present.

i: []   --> return 0
i: [1,1,1,1,1]  --> return 0
i: [0,0,0,0,0,0]  --> return arr.length
    0 1 2 3 4 5 6 7
i: [1,1,1,0,0,0,0,0]  --> return the num of 0s ==> 5
    L     M       R   let mid = Math.floor((L + R)/2)
    L M   R           recal the mid = 1
      L M R           recal the mid = 2
        L R           since my L and R have a diff of 1, arr[L] = 1 and arr[R] = 0

option 3:  O(log n)
if the length is 0 return 0
if the last ele is 1 return 0
if the first ele is 0 return the length of the arr
declare left and right

while left + 1 !== right
  // find the mid 
  // if the arr[mid] is 1
    // reassign the left to mid
  // otherwise
    // reassign the right tp mid
return length - right
*/

function countZeros(arr){
  if (arr.length === 0 || arr[arr.length - 1] === 1) return 0;
  if (arr[0] === 0) return arr.length;
  let left = 0
  let right = arr.length - 1
  while (left + 1 !== right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === 1) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return arr.length - right;
}

console.log(countZeros([1,1,1,0,0,0,0,0]))