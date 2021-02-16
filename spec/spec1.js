var assert = chai.assert;

describe("sumTwoNums", function() {
  it('should return a number', function() {
    var result = sumTwoNums(1, 2);
    assert.equal(typeof result, "number");
  });
  it('should return the sum of 2 positive values', function() {
    var result = sumTwoNums(1, 2);
    assert.equal(result, 3);
  });
  it('should return the sum of 2 values', function() {
    var result = sumTwoNums(1/5, 3/5);
    assert.equal(result, 0.8);
  });
});

describe("DefangingAnIPAdress", () => {
  it('should return a sting', () => {
    var result = defangIPaddr("1.1.1.1")
    assert.equal(typeof result, "string")
  });
  it('should replace every "." with "[.]"', () => {
    var result = defangIPaddr("1.1.1.1")
    assert.equal(result, "1[.]1[.]1[.]1")
  });
  it('should replace every "." with "[.]"', () => {
    var result = defangIPaddr("255.100.50.0")
    assert.equal(result, "255[.]100[.]50[.]0")
  });
  it('if the address does not have a "." it should not change', () => {
    var address = "255100500"
    var result = defangIPaddr("255100500")
    assert.equal(result, address)
  });
});