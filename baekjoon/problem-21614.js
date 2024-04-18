let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
let preDir = ''
while (input[index] !== '99999') {
  let dirNum = Number(input[index].split('')[0]) + Number(input[index].split('')[1])
  let dir = ''
  if (dirNum % 2 === 1) {
    dir = 'left'
  }else if (dirNum !== 0) {
    dir = 'right'
  }else {
    dir = preDir
  }
  preDir = dir
  answer += (dir + ' ' + input[index].split('')[2] + input[index].split('')[3] + input[index].split('')[4] + '\n')
  index++
}
console.log(answer)
