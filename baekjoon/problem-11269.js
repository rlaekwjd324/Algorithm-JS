let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let count = 0
for (let i = 0; i < n.length; i++) {
  if (i % 3 === 0) {
    if (n[i] === 'P' || n[i] === 'p') {
      continue
    }
  }else if (i % 3 === 1) {
    if (n[i] === 'E' || n[i] === 'e') {
      continue
    }
  }else {
    if (n[i] === 'R' || n[i] === 'r') {
      continue
    }
  }
  count++
}
console.log(count)
