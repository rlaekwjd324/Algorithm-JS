let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let time = 1
let direction = 1
let answer = ''
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ')
  let isCenter = 'NO'
  if (line[0] === 'HOURGLASS') {
    if (parseInt(line[1]) !== time) {
      direction = direction * -1
    }
  } else if (parseInt(line[1]) === time) {
    isCenter = 'YES'
  }
  answer += (time + ' ' + isCenter + '\n')
  time = (time + direction) % 12
  if (time === 0) {
    time = 12
  }
}
console.log(answer)
