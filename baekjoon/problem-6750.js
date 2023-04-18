let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = ['I', 'O', 'S', 'H', 'Z', 'X', 'N']
let n = input[0].split('')
for (let i = 0; i < n.length; i++) {
  if (!array.includes(n[i])) {
    return console.log('NO')
  }
}
console.log('YES')
