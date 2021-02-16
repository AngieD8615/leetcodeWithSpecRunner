// sumTwoNumber takes in 2 integer values and returns the sum
const sumTwoNums = (a, b) => {
  return a + b;
}

// Defanging an IP address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// note: cannot use replaceAll in leetcode
var defangIPaddr = function(address) {
    let result = address.split(".").join("[.]")
    return result;
};