var assert = chai.assert;

describe("Should add 2 numbers represented as strings", () => {
  it ("Should give the correct result when 1 or both inputs are empty", () => {
    let num = "123"
    let expected = "123"
    let actual1 = sum("", "")
    let actual2 = sum(num, "")
    let actual3 = sum("", num)
    assert.equal(actual1, "0")
    assert.equal(actual2, expected)
    assert.equal(actual3, expected)
  })
  it ("Should give the correct result for simple adding", () => {
    let num1 = "12"
    let num2 = "34"
    let expected = "46"
    let actual = sum(num1, num2)
    assert.equal(actual, expected)
  })
  it ("Should give the correct result when needing to carry", () => {
    let num1 = "127"
    let num2 = "274"
    let expected = (127 + 274).toString()
    let actual = sum(num1, num2)
    assert.equal(actual, expected)
  })
  it ("Should give the correct result when need trailing 0s", () => {
    let num1 = "12709"
    let num2 = "274"
    let expected = (12709 + 274).toString()
    let actual = sum(num1, num2)
    assert.equal(actual, expected)
  })
  it ("Should give the correct result when need trailing 0s", () => {
    let num1 = "127"
    let num2 = "27423"
    let expected = (127 + 27423).toString()
    let actual = sum(num1, num2)
    assert.equal(actual, expected)
  })
})