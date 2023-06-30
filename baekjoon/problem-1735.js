let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a1 = BigInt(input[0].split(' ')[0])
let b1 = BigInt(input[0].split(' ')[1])
let a2 = BigInt(input[1].split(' ')[0])
let b2 = BigInt(input[1].split(' ')[1])
let a = a1 * b2 + a2 * b1
let b = b1 * b2
let i = 2
while (i <= sqrt(b1 * b2)) {
  if (a % BigInt(i) === 0n && b % BigInt(i) === 0n) {
    a = a / BigInt(i)
    b = b / BigInt(i)
  }else {
    i++
  }
}
console.log(a + ' ' + b)

function sqrt(value) {
  if (value < 0n) {
      throw 'square root of negative numbers is not supported'
  }
  if (value < 2n) {
      return value;
  }
  function newtonIteration(n, x0) {
      const x1 = ((n / x0) + x0) >> 1n;
      if (x0 === x1 || x0 === (x1 - 1n)) {
          return x0;
      }
      return newtonIteration(n, x1);
  }
  return newtonIteration(value, 1n);
}