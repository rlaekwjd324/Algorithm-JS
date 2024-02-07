let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let array = input[i].split(' ').map(function (v) { return Number(v)})
  let count = Number(input[i].split(' ')[2])
  for (let j = 0; j < count; j++) {
    if (array[0] > array[1]) {
      array[0] = parseInt(array[0] / 2)
    }else {
      array[1] = parseInt(array[1] / 2)
    }
    if (array[0] === 0 && array[1] === 0) {
      break
    }
  }
  answer += ('Data set: ' + input[i] + '\n' + Math.max(array[0], array[1]) + ' ' + Math.min(array[0], array[1]) + '\n\n')
}
console.log(answer)
