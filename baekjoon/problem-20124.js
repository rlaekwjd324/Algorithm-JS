let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let max = 0
let answer = ''
for (let i = 1; i <= parseInt(input[0]);i++) {
  let line = input[i].split(' ')
  if (max < parseInt(line[1])) {
    max = parseInt(line[1])
    answer = line[0]
  }else if (max === parseInt(line[1])) {
    if (answer > line[0]) {
      answer = line[0]
    }
  }
}
console.log(answer)
