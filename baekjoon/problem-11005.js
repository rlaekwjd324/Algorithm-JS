let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = BigInt(input[0].split(' ')[0])
let a = BigInt(input[0].split(' ')[1])
let array = []
while(n > 0) {
  array.push(n % a)
  n = n / a
}
let answer = ''
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 10n) {
    answer = (String.fromCharCode(Number(array[i]) + 55)) + answer
  }else {
    answer = array[i]+answer
  }
}
console.log(answer)
