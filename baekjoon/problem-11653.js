let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = BigInt(input[0])
if(n === 1n) {
  return
}
let answer = ''
let i = 2
while (BigInt(i) <= sqrt(n)) {
  if (n % BigInt(i) === 0n) {
    n = n / BigInt(i)
    answer+= (i+'\n')
  }else {
    i++
  }
}
answer+= (n+'\n')
console.log(answer)

function sqrt(value) {
  if (value < 0n) {
    throw 'square root of negative numbers is not supported'
  }
  if (value < 2n) {
    return value;
  }
  if(value === 4n) {
    return 2n
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