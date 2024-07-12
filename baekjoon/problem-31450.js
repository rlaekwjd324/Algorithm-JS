let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let m = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
if(m%k===0) {
  return console.log('Yes')
}
console.log('No')
