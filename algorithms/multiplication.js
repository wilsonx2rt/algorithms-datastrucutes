// write a function multiply(a,b) which multiply a and b by only using + and - operators
// write it recursive first
// return (a / (1/b))

function multiply(a, b) {
  result = 0;
  for (let i = 0; i < a; i++) {
    result += b;
  }
  return result;
}

// console.log(multiply(2,2));

function recusiveMultiplyer(x, y) {
  if (y == 0) {
    return 0;
  }
  else {
    console.log(x)
    return x + recusiveMultiplyer(x, y-1);
  }
}

console.log(recusiveMultiplyer(2,2));