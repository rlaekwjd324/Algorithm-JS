let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let array = new Array(n)
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(function (v) { return parseInt(v)})
  array[i - 1] = [line[0], line[1]]
}
for (let i = n + 1; i <= n + m; i++) {
  let k = parseInt(input[i])
  for (let j = 0; j < n; j++) {
    if (k >= array[j][0]) {
      let tmp = array[j][0]
      array[j][0] = array[j][1]
      array[j][1] = tmp
    }
  }
}
let answer = 0
for (let i = 0; i < n; i++) {
  answer += array[i][0]
}
console.log(answer)
