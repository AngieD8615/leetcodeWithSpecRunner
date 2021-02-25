var assert = chai.assert;
var expect = chai.expect;

describe("Should count the number of Zeros", () => {
  it("When given an empty array, it should return 0", () => {
    let test = [];
    let actual = countZeros(test);
    let expected = 0;
    assert.equal(actual, expected)
  });
  it("When given an array with only 1s, it should return 0", () => {
    let test = [1,1,1,1,1,1,1];
    let actual = countZeros(test);
    let expected = 0;
    assert.equal(actual, expected)
  });
  it("When given an array with only 0s, it should return the number of 0s", () => {
    let test = [0,0,0,0,0,0,0];
    let actual = countZeros(test);
    let expected = 7;
    assert.equal(actual, expected)
  });
  it("When given an array of 1s followed by 0s, it should return the number of 0s", () => {
    let test = [1,1,1,1,1,0,0,0,0,0,0,0,0];
    let actual = countZeros(test);
    let expected = 8;
    assert.equal(actual, expected)
  });

})