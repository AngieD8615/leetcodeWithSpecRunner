var assert = chai.assert;
var expect = chai.expect;

describe("should sort books", () => {
  it("sorts an empty array", () => {
    let test = [];
    let actual = sortBooks(test);
    let expected = [];
    expect(actual).to.eql(expected)
  });
  it("sorts an array with length 1", () => {
    let test = ["hello world"];
    let actual = sortBooks(test);
    let expected = ["hello world"];
    expect(actual).to.eql(expected)
  });
  it("sorts an array with length 2", () => {
    let test = ["hello world", "hello people"];
    let actual = sortBooks(test);
    let expected = ["hello people", "hello world"];
    expect(actual).to.eql(expected)
  });
  it("sorts an array", () => {
    let test = ["books", "another book", "angie's", "hello people", "hello world"];
    let actual = sortBooks(test);
    let expected = ["angie's", "another book", "books",  "hello people", "hello world"];
    expect(actual).to.eql(expected)
  });
  it("sorts an array", () => {
    let test = ["books", "another book", "angie's", "hello people", "joker", "hello world"];
    let actual = sortBooks(test);
    let expected = ["angie's", "another book", "books",  "hello people", "hello world", "joker"];
    expect(actual).to.eql(expected)
  });
})