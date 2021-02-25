var assert = chai.assert;
var expect = chai.expect;

describe("Should sum the diagonals of a matrix", () => {
  it("When given an empty array, it should return 0", () => {
    let test = [];
    let actual = diagonalSum(test);
    let expected = 0;
    assert.equal(actual, expected)
  });
  it("When given an array of 1 element, return that value", () => {
    let test = [[1]];
    let actual = diagonalSum(test);
    let expected = 1;
    assert.equal(actual, expected)
  });
  it("When given an even length array, return the sum of the diagonals", () => {
    let test2 = [[1, 2], [3, 4]];
    let actual2 = diagonalSum(test2);
    let expected2 = 10;
    assert.equal(actual2, expected2)

    let test4 = [[1, 2, 3, 4], 
                 [1, 2, 3, 4], 
                 [1, 2, 3, 4], 
                 [1, 2, 3, 4]];
    let actual4 = diagonalSum(test4);
    let expected4 = 20;
    assert.equal(actual4, expected4)

    let test6 = [[1, 1, 1, 1, 1, 1], 
                 [2, 2, 2, 2, 2, 2], 
                 [3, 3, 3, 3, 3, 3],
                 [4, 4, 4, 4, 4, 4],
                 [5, 5, 5, 5, 5, 5],
                 [6, 6, 6, 6, 6, 6]];
    let actual6 = diagonalSum(test6);
    let expected6 = 42;
    assert.equal(actual6, expected6)
  });
  it("When given an odd length array, return the sum of the diagonals", () => {
    let test3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let actual3 = diagonalSum(test3);
    let expected3 = 25;
    assert.equal(actual3, expected3)

    let test5 = [[1, 2, 3, 4, 5], 
                 [1, 2, 3, 4, 5], 
                 [1, 2, 3, 4, 5], 
                 [1, 2, 3, 4, 5], 
                 [1, 2, 3, 4, 5]];
    let actual5 = diagonalSum(test5);
    let expected5 = 27;
    assert.equal(actual5, expected5)

    let test7 = [[1, 1, 1, 1, 1, 1, 1], 
                 [2, 2, 2, 2, 2, 2, 2], 
                 [3, 3, 3, 3, 3, 3, 3],
                 [4, 4, 4, 4, 4, 4, 4],
                 [5, 5, 5, 5, 5, 5, 5],
                 [6, 6, 6, 6, 6, 6, 6],
                 [7, 7, 7, 7, 7, 7, 7]];
    let actual7 = diagonalSum(test7);
    let expected7 = 52;
    assert.equal(actual7, expected7)
  });
  it ("should pass the examples that leetcode provides", () =>{
    let mat1 = [[1,2,3], [4,5,6], [7,8,9]]
    let actual1 = diagonalSum(mat1);
    let expected1 = 25;
    assert.equal(actual1, expected1)

    let mat2 = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]
    let actual2 = diagonalSum(mat2);
    let expected2 = 8;
    assert.equal(actual2, expected2)

    let mat3 = [[5]]
    let actual3 = diagonalSum(mat3);
    let expected3 = 5;
    assert.equal(actual3, expected3)
  })
});