let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = BigInt(input[0].split(' ')[0])
let b = BigInt(input[0].split(' ')[1])
if(a>b) {
  let temp = a
  a = b
  b = temp
}
let array = []
for (let i = a + 1n; i < b; i=i+1n) {
  array.push(i)
}
console.log(array.length+'\n'+array.join(' '))
