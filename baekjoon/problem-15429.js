let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let array = input[i].split(' ').map(function (v) { return Number(v)})
  let l = array[0]
  let pre = array[1]
  for (let j = 2; j <= l; j++) {
    if (pre + 1 === array[j]) {
      pre = array[j]
      continue
    }
    answer += (j + '\n')
    break
  }
}
console.log(answer)
