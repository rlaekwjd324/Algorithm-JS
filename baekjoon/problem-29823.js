let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let steps = input[1].split('')
let position = [0, 0]
for (let i = 0; i < n; i++) {
  switch (steps[i]) {
    case 'N':
      position[0]++
      break
    case 'S':
      position[0]--
      break
    case 'E':
      position[1]++
      break
    case 'W':
      position[1]--
      break
  }
}
console.log(Math.abs(position[0]) + Math.abs(position[1]))
