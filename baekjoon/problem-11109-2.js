let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let d = Number(input[i].split(' ')[0])
  let n = Number(input[i].split(' ')[1])
  let s = Number(input[i].split(' ')[2])
  let p = Number(input[i].split(' ')[3])
  if (d + n * p === n * s) {
    answer += 'does not matter\n'
    continue
  }
  if (d + n * p > n * s) {
    answer += 'do not parallelize\n'
    continue
  }
  answer += 'parallelize\n'
}
console.log(answer)
