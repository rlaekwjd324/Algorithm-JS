let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let num = Number(input[i])
  let array = [1, 1]
  for (let j = 0; j <= num - 2; j++) {
    array.push(array[j] + array[j + 1])
  }
  answer += (array[num] + '\n')
}
console.log(answer)
