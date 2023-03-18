let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let count = 0
let answer = ''
for (let i = 1; i <= t;i++) {
  count = 0
  let number = parseInt(input[i])
  back(number, [], 0)
  answer += (count + '\n')
}
console.log(answer)

function back (num, array, sum) {
  if (sum === num) {
    count++
    return
  }
  for (let i = 1; i <= 3; i++) {
    if (sum + i <= num) {
      back(num, [...array, i], sum + i)
    }
  }
}
