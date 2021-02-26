const mapping = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
//i: is a string on numbers from 2 - 9 (max length is 4)
//o: an arr of strings comprising all strings that can be made from the number

// using recursion to solve
// base case
// if the curInd length of digits

const letterCombinations = function (digits) {
  // edge case: give an empty string of digits
  if (digits.length === 0) return [];

  let results = [];
  const helper = (curWord) => {
    // baseCase: if the length of the curWord is the desired length
    // push the word into the results array
    // stop the continuation;
    if (curWord.length === digits.length) {
      results.push(curWord);
      return;
    }
    // recursionCase: need to keep adding to the word
    // for each letter that is associated with the cur number
      // apply the helper function on the curWord + the next letter
    let curDigit = digits[curWord.length];
    for (var i = 0; i < mapping[curDigit].length; i++) {
      helper(curWord + mapping[curDigit][i]);
    }
  };

  // invoke the helper
  // return results
  helper("");
  return results;
};
