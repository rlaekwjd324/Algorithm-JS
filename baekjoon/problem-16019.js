let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
let d = Number(input[0].split(' ')[3])
let array = new Array(5)
array[0] = [0, a, a + b, a + b + c, a + b + c + d]
array[1] = [a, 0, b, b + c, b + c + d]
array[2] = [a + b, b, 0, c, c + d]
array[3] = [a + b + c, b + c, c, 0, d]
array[4] = [a + b + c + d, b + c + d, c + d, d, 0]
let answer = ''
for (let i = 0; i < 5; i++) {
  answer += (array[i].join(' ') + '\n')
}
console.log(answer)
