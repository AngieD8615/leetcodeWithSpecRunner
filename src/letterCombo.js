// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter 
// combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

const letterCombinations = function (digits) {  // ""
  if (digits.length === 0) return [];
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
  
  // recursive

  let combos = []
  const helper = (curStr) => {
    // base case: 
    //if the curStr length is equal to the digits length 
      // push the curStr into combos
      // end the process (return)
    if (curStr.length === digits.length) {
      combos.push(curStr)
      return
    }
    // recursive case:
    // for all letter options for the curDigit
      // reapply helper on  curStr + the next letter (from the mapping)
    let curInd = curStr.length
    let curDig = digits[curInd]
    let letters = mapping[curDig]
    for (var i = 0; i < letters.length; i++) {
      helper(curStr + letters[i])
    }

  }
  helper('')
  return combos
};
