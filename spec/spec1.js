var assert = chai.assert;

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

})
