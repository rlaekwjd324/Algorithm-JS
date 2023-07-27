let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
let res = 1
while (b > 0){
  if (b % 2 === 1)
    res = (res * a) % c
  a = ((a % c) * (a % c)) % c
  b = b / 2
}
console.log(res)

function pow (a, n, c) {
  if (n === 0)
    return 1
  if (n === 1)
    return a % c

  if (n % 2 === 0) {
    return (pow(a, n / 2, c) * pow(a, n / 2, c)) % c
  }else {
    return (pow(a, n / 2 + 1, c) * pow(a, n / 2, c)) % c
  }
}
