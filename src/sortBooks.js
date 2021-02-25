// given a arr of unsorted book titles, sort the books and return the sorted arr
// discuss the time a space complexity -> optimize for time complexity 


const sortBooks = (books) => {
  if (books.length <= 1) return books
  let pivot = books[0]
  let pivots = [books[0]]
  let left = []
  let right = []
  for (var i = 1; i < books.length; i++) {

    if (pivot < books[i]) {
      right.push(books[i])
    } else if (pivot > books[i]) {
      left.push(books[i])
    } else {
      pivots.push(books[i])
    }
  }
  return [...sortBooks(left), ...pivots, ...sortBooks(right)]
}

