let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let sum = 0
for (let i = 1; i <= n; i++) {
  let array = input[i].split(' ')
  for (let j = 0; j < n; j++) {
    sum += Number(array[j])
  }
}
console.log(sum)
