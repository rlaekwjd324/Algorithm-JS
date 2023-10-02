let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n1 = BigInt(input[0].split(' ')[0])
let n2 = BigInt(input[0].split(' ')[1])
let n3 = BigInt(input[0].split(' ')[2])
console.log(pow(n1, n2, n3).toString())

function pow (a, n, c) {
  if (n === 1n)
    return a % c
  let tmp = pow(a, n / BigInt(2), c)
  tmp = (tmp * tmp) % c
  if (n % BigInt(2) === 0n)
    return tmp
  else
    return tmp * a % c
}
