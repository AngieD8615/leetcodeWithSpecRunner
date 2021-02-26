var assert = chai.assert;
var expect = chai.expect;

describe ("should return all possible letter combos", () => {
  it("should return an empty digit when given an empty string", () => {
    let noDigits = "";
    let expected = [];
    let actual = letterCombinations(noDigits);
    expect(actual).to.eql(expected);
  });
  
  it("should return all possible combos when given a value", () => {
    let singleDigit = "2";
    let expected = ["a", "b", "c"];
    let actual = letterCombinations(singleDigit);
    assert.equal(actual.length, 3)
    expect(actual).to.eql(expected);
  });

  it("should return all possible combos when given a value", () => {
    let singleDigit = "5";
    let expected = ["j", "k", "l"];
    let actual = letterCombinations(singleDigit);
    assert.equal(actual.length, 3)
    expect(actual).to.eql(expected);
  });

  it("should return all possible combos when given a value", () => {
    let digits = "25";
    let expected = ["aj", "ak","al","bj", "bk","bl","cj", "ck","cl"];
    let actual = letterCombinations(digits);
    assert.equal(actual.length, 9)
    expect(actual).to.eql(expected);
  });

  it("should return all possible combos when given a value", () => {
    let digits = "259";
    let expected = ["ajw","akw","alw",
                    "bjw","bkw","blw",
                    "cjw","ckw","clw",
                    "ajx","akx","alx",
                    "bjx","bkx","blx",
                    "cjx","ckx","clx",
                    "ajy","aky","aly",
                    "bjy","bky","bly",
                    "cjy","cky","cly",
                    "ajz","akz","alz",
                    "bjz","bkz","blz",
                    "cjz","ckz","clz"].sort();
    let actual = letterCombinations(digits).sort();
    assert.equal(actual.length, 36)
    expect(actual).to.eql(expected);
  });

  it("should return all possible combos when given a value", () => {
    let digits = "259";
    let expected = ["ajw","akw","alw",
                    "bjw","bkw","blw",
                    "cjw","ckw","clw",
                    "ajx","akx","alx",
                    "bjx","bkx","blx",
                    "cjx","ckx","clx",
                    "ajy","aky","aly",
                    "bjy","bky","bly",
                    "cjy","cky","cly",
                    "ajz","akz","alz",
                    "bjz","bkz","blz",
                    "cjz","ckz","clz"].sort();
    let actual = letterCombinations(digits).sort();
    assert.equal(actual.length, 36)
    expect(actual).to.eql(expected);
  });

})