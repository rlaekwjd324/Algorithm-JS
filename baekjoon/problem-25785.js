let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let array = ['a', 'e', 'i', 'o', 'u']
let isMo = false
if(array.includes(n[0])) {
  isMo = true
}
for (let i = 1; i < n.length; i++) {
  if(isMo && array.includes(n[i])) {
    return console.log(0)
  }
  if(!isMo && !array.includes(n[i])) {
    return console.log(0)
  }
  isMo = !isMo
}
console.log(1)