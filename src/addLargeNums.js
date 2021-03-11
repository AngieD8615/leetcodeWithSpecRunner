/**
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

 */
const sum = (num1, num2) => {
// if num1 and num2 are empty return 0
// if num1 is 0 return num2
// if num2 is 0 return num1
if (num1.length === 0 && num2.length === 0) return "0"
if (num1.length === 0) return num2
if (num2.length === 0) return num1


// declare pointers for num1 and num2  -> start at length - 1
// declare a carry variable, assign to 0
// declare an arr to hold my result. 
let num1p = num1.length - 1
let num2p = num2.length - 1
let carry = 0
let result = []

// while pointer from num1 or num2 is greater than zero
  // sum the digits and the carry value
  // if the sum is greater than 9
    // set carry to 1
    // decrease the sum by 10
  // else 
    // carry to 0
  // push the sum into arr (as a string)
while(num1p >= 0 || num2p >= 0) {
  let curSum = Number(num1[num1p] || 0) + Number(num2[num2p] || 0) + carry
  if (curSum > 9) {
    carry = 1
    curSum -= 10
  } else {
    carry = 0  
  }
  result.push(curSum.toString())
  num1p--
  num2p--
}


// reverse the result arr
result = result.reverse().join("")
return result
  
};

console.log(sum("", ""))  // 0
console.log(sum("24", ""))  // 24
console.log(sum("", "24"))  // 24
console.log(sum("12", "24"))  // 36
console.log(sum("18", "24"))  // 42
console.log(sum("1002", "24"))  //  1026
console.log(sum("12", "1002"))  //  1014
console.log(sum("45678", "732143") == 45678 + 732143)  // true
