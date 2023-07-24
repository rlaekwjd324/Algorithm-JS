let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let w = parseInt(input[0].split(' ')[1])
let h = parseInt(input[0].split(' ')[2])
let answer = ''
for (let i = 1; i <= n; i++) {
  let l = parseInt(input[i])
  if (l <= w || l <= h || l <= (Math.sqrt(w * w + h * h))) {
    answer += ('YES\n')
    continue
  }
  answer += ('NO\n')
}
console.log(answer)
