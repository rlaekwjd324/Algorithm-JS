let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let p = parseInt(input[0])
let array = [0, 0, 0, 0]
for (let i = 1; i <= p; i++) {
  let g = parseInt(input[i].split(' ')[0])
  let c = parseInt(input[i].split(' ')[1])
  let n = parseInt(input[i].split(' ')[2])
  if (g >= 2) {
    if (c === 1 || c === 2) {
      array[0]++
      continue
    }
    if (c === 3) {
      array[1]++
      continue
    }
    if (c === 4) {
      array[2]++
      continue
    }
  }
  array[3]++
}
console.log(array.join('\n'))
