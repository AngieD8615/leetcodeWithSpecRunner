var assert = chai.assert;

describe("DefangingAnIPAdress", () => {
  it('should return a sting', () => {
    var result = defangIPaddr("1.1.1.1")
    assert.equal(typeof result, "string")
  });
  it('should replace a single "." with "[.]"', () => {
    var result = defangIPaddr(".")
    assert.equal(result, "[.]")
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

describe("Number of Good Pairs", () => {
  it('should handle an empty array', ()=> {
    var nums = [];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 0);
  })
  it('should handle an array with only 1 element', ()=> {
    var nums = [4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 0);
  })
  it('should handle an array', ()=> {
    var nums = [4, 4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 1);
  })
  it('should handle identical values as the highest value', ()=> {
    var nums = [1,2,3,4,4,4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 3);
  })
  it('should handle example 1', ()=> {
    var nums = [1,2,3,1,1,3];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 4);
  })
  it('should handle example 1 sorted', ()=> {
    var nums = [1,1,1,2,3,3];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 4);
  })
  it('should handle example 2', ()=> {
    var nums = [1,1,1,1];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 6);
  })
  it('should handle when there are no identical pairs', ()=> {
    var nums = [1,2,3,4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 0);
  })

});

describe("Jewels and Stones", () => {
  it("if Jewels or Stones is an empty string, it should return 0", () => {
    const empty = "";
    const jewels = "af"
    const stones = "asdfASDF"

    let jewelsEmpty = numJewelsInStones(empty, stones)
    let stonesEmpty = numJewelsInStones(jewels, empty)
    let bothEmpty = numJewelsInStones(empty, empty)
    assert.equal(jewelsEmpty, 0)
    assert.equal(stonesEmpty, 0)
    assert.equal(bothEmpty, 0)
  });
  it("should return a number", () => {
    const jewels = "ab"
    const stones = "ab"
    const result = numJewelsInStones(jewels, stones)
    assert.equal(typeof result, "number")
    assert.equal(result, 2)
  });
  it("should return the number of times jewels appears in stones when jewels is a single letter", () => {
    const jewels = "c"
    const stones1 = "abcd"
    const stones2 = "CacbcdC"
    const stones3 = "acbcdc"
    const stones4 = "abdCDSA"
    assert.equal(numJewelsInStones(jewels, stones1), 1)
    assert.equal(numJewelsInStones(jewels, stones2), 2)
    assert.equal(numJewelsInStones(jewels, stones3), 3)
    assert.equal(numJewelsInStones(jewels, stones4), 0)
  });
  it("should return the number of times jewels appears in stones", () => {
    const jewels = "aB"
    const stones = "ssddaabbBBAASS"
    const result = numJewelsInStones(jewels, stones)
    assert.equal(result, 4)
  });

});
