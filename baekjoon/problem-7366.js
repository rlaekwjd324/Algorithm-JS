let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let c = Number(input[i * 2 - 1])
  let words = input[i * 2].split(' ')
  let count = 0
  for (let j = 0; j < c; j++) {
    if (words[j] === 'sheep') {
      count++
    }
  }
  answer += ('Case ' + i + ': This list contains ' + count + ' sheep.\n\n')
}
console.log(answer)
