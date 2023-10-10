let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let u = Number(input[0].split(' ')[1])
let l = Number(input[0].split(' ')[2])
if(n>=1000) {
  if(u>=8000 || l >= 260) {
    return console.log('Very Good')
  }
  return console.log('Good')
}
return console.log('Bad')