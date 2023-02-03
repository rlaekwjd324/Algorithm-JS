let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let r = parseInt(input[0].split(' ')[0])
let c = parseInt(input[0].split(' ')[1])
let q = parseInt(input[0].split(' ')[2])
let array = new Array(r)
for (let i = 1; i <= r;i++) {
  array[i - 1] = input[i].split(' ').map(function (v) { return parseInt(v)})
}
let answer = ''
for (let i = r + 1; i <= r + q; i++) {
  let r1 = parseInt(input[i].split(' ')[0])
  let c1 = parseInt(input[i].split(' ')[1])
  let r2 = parseInt(input[i].split(' ')[2])
  let c2 = parseInt(input[i].split(' ')[3])
  let sum = 0
  for (let j = r1; j <= r2;j++) {
    for (let k = c1;k <= c2;k++) {
      sum += array[j - 1][k - 1]
    }
  }
  answer += (parseInt(sum / ((r2 - r1+1) * (c2 - c1+1))) + '\n')
}
console.log(answer)
