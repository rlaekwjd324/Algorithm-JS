let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let p = input[0].split(' ')[1]
let s = Number(input[0].split(' ')[2])
let answer = ''
for (let i = 0; i < s; i++) {
  let m = Number(input[i + 1].split(' ')[0])
  let array = []
  for (let j = 1; j <= m; j++) {
    array.push(input[i + 1].split(' ')[j])
  }
  if (array.includes(p)) {
    answer += ('KEEP\n')
  }else {
    answer += ('REMOVE\n')
  }
}
console.log(answer)
