let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let positions = []
for (let i = 0; i < 10; i++) {
  positions.push('....................'.split(''))
}
for (let i = 1; i <= n; i++) {
  let x = input[i].split('')[0].charCodeAt(0) - 65
  let y = Number(input[i].substring(1)) - 1
  positions[x][y] = 'o'
}
let answer = ''
for (let i = 0; i < 10; i++) {
  answer += positions[i].join('')
  answer += '\n'
}
console.log(answer)
