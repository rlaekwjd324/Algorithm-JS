let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let answer = 0
for (let i = 1; i <= n; i++) {
  let p = input[i].split('')
  let c = 0
  for (let j = 0; j < m; j++) {
    if (p[j] === 'O') {
      c++
    }
  }
  if (c > m / 2) {
    answer++
  }
}
console.log(answer)
