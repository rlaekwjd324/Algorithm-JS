let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9]
for (let i = 10; i < 100; i++) {
  array.push(array[i - 5] + array[[i - 1]])
}
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  answer += (array[parseInt(input[i]) - 1] + '\n')
}
console.log(answer)
