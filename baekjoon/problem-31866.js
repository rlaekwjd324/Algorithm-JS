let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split(' ')[0]
let m = input[0].split(' ')[1]
let fail = ['1', '3', '4']
if(n === m || (fail.includes(n) && fail.includes(m))) {
  return console.log('=')
}
if(n === '0') {
  if(m === '5') {
    return console.log('<')
  }
  return console.log('>')
}
if(n==='2') {
  if(m === '0') {
    return console.log('<')
  }
  return console.log('>')
}
if(n==='5') {
  if(m === '2') {
    return console.log('<')
  }
  return console.log('>')
}
console.log('<')