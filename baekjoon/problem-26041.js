let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = input[0].split(' ')
let b = input[1]
let count = 0
for (let i = 0; i < a.length; i++) {
  if(a[i] !== b && a[i].includes(b) && a[i].split(b)[0] === '') {
    count++
  }
}
console.log(count)
