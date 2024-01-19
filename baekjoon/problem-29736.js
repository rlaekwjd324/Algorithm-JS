let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let k = Number(input[1].split(' ')[0])
let x = Number(input[1].split(' ')[1])
let min = k - x
let max = k + x
if(a>max || b<min)
  return console.log('IMPOSSIBLE')
let count= 0
for(let i=Math.max(a, min); i<=Math.min(b, max); i++){
  count++
}
console.log(count)