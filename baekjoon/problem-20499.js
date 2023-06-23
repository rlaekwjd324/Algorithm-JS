let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let k = parseInt(input[0].split('/')[0])
let d = parseInt(input[0].split('/')[1])
let a = parseInt(input[0].split('/')[2])
if(k+a<d || d===0) {
  return console.log('hasu')
}
console.log('gosu')