let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let line = input[0].split(' ').map(function (v) {return parseInt(v)})
let answer = ''
for (let i = 1; i <= line[0]; i++) {
  let image = input[i].split('')
  for (let j = 0; j < line[1]; j++) {
    if (image[j] !== '.') {
      image[line[1] - j - 1] = image[j]
    }
  }
  answer += (image.join('') + '\n')
}
console.log(answer)
