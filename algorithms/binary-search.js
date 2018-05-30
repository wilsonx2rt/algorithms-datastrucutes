// write a function multiply(a,b) which multiply a and b by only using + and - operators
// write it recursive first

function binarySearch(a, t) {
  let midEl = a[Math.floor(a.length/2)];

  if (t == midEl) {
    console.log('in the first');
    return a.indexOf(midEl);
  } else if (t > midEl) {
    console.log('in the second');
    return binarySearch(a.slice(a.indexOf(midEl), a.length-1))
  } else {
    console.log('in the third');
    return binarySearch(a.slice(0, a.indexOf(midEl)), t)
  }
}

// console.log(1, binarySearch([1,2,3,4,5,6,7,8,9,10], 1))
// console.log(2, binarySearch([1,2,3,4,5,6,7,8,9,10], 2))
// console.log(3, binarySearch([1,2,3,4,5,6,7,8,9,10], 3))
// console.log(4, binarySearch([1,2,3,4,5,6,7,8,9,10], 4))
// console.log(5, binarySearch([1,2,3,4,5,6,7,8,9,10], 5))
// console.log(6, binarySearch([1,2,3,4,5,6,7,8,9,10], 6))
console.log(7, binarySearch([1,2,3,4,5,6,7,8,9,10], 7))
// console.log(8, binarySearch([1,2,3,4,5,6,7,8,9,10], 8))
// console.log(9, binarySearch([1,2,3,4,5,6,7,8,9,10], 9))
// console.log(10, binarySearch([1,2,3,4,5,6,7,8,9,10], 10))