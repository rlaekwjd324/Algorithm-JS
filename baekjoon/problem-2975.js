let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0 W 0') {
  let line = input[index].split(' ')
  if (line[1] === 'D') {
    answer += (parseInt(line[0]) + parseInt(line[2]))
  }else {
    let temp = parseInt(line[0]) - parseInt(line[2])
    answer += (temp < -200 ? 'Not allowed' : temp)
  }
  answer += '\n'
  index++
}
console.log(answer)
