var assert = chai.assert;
var expect = chai.expect;

describe("DefangingAnIPAddress", () => {
  it("should return a sting", () => {
    var result = defangIPaddr("1.1.1.1");
    assert.equal(typeof result, "string");
  });
  it('should replace a single "." with "[.]"', () => {
    var result = defangIPaddr(".");
    assert.equal(result, "[.]");
  });
  it('should replace every "." with "[.]"', () => {
    var result = defangIPaddr("1.1.1.1");
    assert.equal(result, "1[.]1[.]1[.]1");
  });
  it('should replace every "." with "[.]"', () => {
    var result = defangIPaddr("255.100.50.0");
    assert.equal(result, "255[.]100[.]50[.]0");
  });
  it('if the address does not have a "." it should not change', () => {
    var address = "255100500";
    var result = defangIPaddr("255100500");
    assert.equal(result, address);
  });
});

describe("Number of Good Pairs", () => {
  it("should handle an empty array", () => {
    var nums = [];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 0);
  });
  it("should handle an array with only 1 element", () => {
    var nums = [4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 0);
  });
  it("should handle an array", () => {
    var nums = [4, 4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 1);
  });
  it("should handle identical values as the highest value", () => {
    var nums = [1, 2, 3, 4, 4, 4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 3);
  });
  it("should handle example 1", () => {
    var nums = [1, 2, 3, 1, 1, 3];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 4);
  });
  it("should handle example 1 sorted", () => {
    var nums = [1, 1, 1, 2, 3, 3];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 4);
  });
  it("should handle example 2", () => {
    var nums = [1, 1, 1, 1];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 6);
  });
  it("should handle when there are no identical pairs", () => {
    var nums = [1, 2, 3, 4];
    var result = numIdenticalPairs(nums);
    assert.equal(result, 0);
  });
});

describe("Jewels and Stones", () => {
  it("if Jewels or Stones is an empty string, it should return 0", () => {
    const empty = "";
    const jewels = "af";
    const stones = "asdfASDF";

    let jewelsEmpty = numJewelsInStones(empty, stones);
    let stonesEmpty = numJewelsInStones(jewels, empty);
    let bothEmpty = numJewelsInStones(empty, empty);
    assert.equal(jewelsEmpty, 0);
    assert.equal(stonesEmpty, 0);
    assert.equal(bothEmpty, 0);
  });
  it("should return a number", () => {
    const jewels = "ab";
    const stones = "ab";
    const result = numJewelsInStones(jewels, stones);
    assert.equal(typeof result, "number");
    assert.equal(result, 2);
  });
  it("should return the number of times jewels appears in stones when jewels is a single letter", () => {
    const jewels = "c";
    const stones1 = "abcd";
    const stones2 = "CacbcdC";
    const stones3 = "acbcdc";
    const stones4 = "abdCDSA";
    assert.equal(numJewelsInStones(jewels, stones1), 1);
    assert.equal(numJewelsInStones(jewels, stones2), 2);
    assert.equal(numJewelsInStones(jewels, stones3), 3);
    assert.equal(numJewelsInStones(jewels, stones4), 0);
  });
  it("should return the number of times jewels appears in stones", () => {
    const jewels = "aB";
    const stones = "ssddaabbBBAASS";
    const result = numJewelsInStones(jewels, stones);
    assert.equal(result, 4);
  });
});

describe("Max depth for a Binary Tree", () => {
  it("should return 0 when there is no root value", () => {
    let root = null;
    let result = maxDepth(root);
    assert.equal(result, 0);
  });
  it("should return 1 when the BT only has the root node", () => {
    let root = { val: 6, left: null, right: null };
    let result = maxDepth(root);
    assert.equal(result, 1);
  });
  it("should return 2 when the BT depth is 2", () => {
    let root = { 
      val: 1, 
      left: {
        val: "L2", 
        left: null, 
        right: null 
      }, 
      right: { 
        val: "R2", 
        left: null, 
        right: null 
      } 
    };
    let result = maxDepth(root);
    assert.equal(result, 2);
  });
  it("should return the maximum depth", () => {
    let root = {
      val: 10,
      left: {
        val: 1,
        left: { val: 2, left: null, right: null },
        right: {
          val: 3,
          left: { val: 4, left: null, right: null },
          right: { val: 5, left: null, right: null },
        },
      },
      right: { val: 6, left: null, right: null }
    };
    let result = maxDepth(root);
    assert.equal(result, 4);
  });
  it("should return the maximum depth", () => {
    let root = {
      val: 3, 
      left: {
        val: 9,
        left: null, 
        right: null  
      },
      right: {
        val: 20, 
        left: {
          val: 15, 
          left: null,
          right: null
        },
        right: {
          val: 7, 
          left: null,
          right: null
        }
      }
    };
    let result = maxDepth(root);
    assert.equal(result, 3);
  });
});


describe("MIN depth for a Binary Tree", () => {
  it("should return 0 when there is no root value", () => {
    let root = null;
    let result = minDepth(root);
    assert.equal(result, 0);
  });
  it("should return 1 when the BT only has the root node", () => {
    let root = { val: 6, left: null, right: null };
    let result = minDepth(root);
    assert.equal(result, 1);
  });
  it("should return 2 when the BT depth is 2", () => {
    let root = { 
      val: 1, 
      left: {
        val: "L2", 
        left: null, 
        right: null 
      }, 
      right: { 
        val: "R2", 
        left: null, 
        right: null 
      } 
    };
    let result = minDepth(root);
    assert.equal(result, 2);
  });

  it("should return 1 when only 1 branch", () => {
    let root = { 
      val: 1, 
      left: {
        val: "L2", 
        left: null, 
        right: null 
      }, 
      right: null
    };
    let result = minDepth(root);
    assert.equal(result, 1);
  });

  it("should return the minimum depth", () => {
    let root = {
      val: 10,
      left: {
        val: 1,
        left: { val: 2, left: null, right: null },
        right: {
          val: 3,
          left: { val: 4, left: null, right: null },
          right: { val: 5, left: null, right: null },
        },
      },
      right: { val: 6, left: null, right: null }
    };
    let result = minDepth(root);
    assert.equal(result, 2);
  });
  it("should return the minimum depth", () => {
    let root = {
      val: 3, 
      left: {
        val: 9,
        left: null, 
        right: null  
      },
      right: {
        val: 20, 
        left: {
          val: 15, 
          left: null,
          right: null
        },
        right: {
          val: 7, 
          left: null,
          right: null
        }
      }
    };
    let result = minDepth(root);
    assert.equal(result, 2);
  });
});

describe("Should merge two sorted lists", () => {
  it("should return null given two empty list", () => {
    let l1 = new LinkedList()
    let l2 = new LinkedList()
    let result = sortedMerge(l1, l2)
    expect(result).to.eql(null)
  });
  it("should return l1 when l2 is an empty list", () => {
    let l1 = new LinkedList()
    let l2 = new LinkedList()
    l2.insert(1) 
    l2.insert(2) 
    let result = sortedMerge(l1, l2)

    expect(result).to.eql(l2)
  });
  it("should return l2 when l1 is an empty list", () => {
    let l1 = new LinkedList(3)
    l1.insert (4) 
    let l2 = new LinkedList(null)
    let result = sortedMerge(l1, l2);
    expect(result).to.eql(l1)
  });
  it("should merge 2 sorted lists into 1 sorted list", () => {
    let l1 = new LinkedList()
    l1.insert (3) 
   
    let l2 = new LinkedList()
    l2.insert (2) 
    let result = sortedMerge(l1, l2)
    let expected = new LinkedList()
    expected.insert(2)
    expected.insert(3)
    expect(result).to.eql(expected)
  }); 
  it("should merge 2 sorted lists into 1 sorted list", () => {
    let l1 = new LinkedList()
    l1.insert (1) 
    l1.insert (4)
    l1.insert (7)
    let l2 = new LinkedList()
    l2.insert (3) 
    l2.insert (4) 
    l2.insert (5) 
    let expected = new LinkedList()
    expected.insert(1)
    expected.insert(3)
    expected.insert(4)
    expected.insert(4)
    expected.insert(5)
    expected.insert(7)
    let result = sortedMerge(l1, l2)
    expect(result).to.eql(expected)
  });
})