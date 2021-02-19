var assert = chai.assert;
var expect = chai.expect;

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