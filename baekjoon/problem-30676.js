let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
if(n>=620) {
  return console.log('Red')
}
if(n>=590) {
  return console.log('Orange')
}
if(n>=570) {
  return console.log('Yellow')
}
if(n>=495) {
  return console.log('Green')
}
if(n>=450) {
  return console.log('Blue')
}
if(n>=425) {
  return console.log('Indigo')
}
if(n>=380) {
  return console.log('Violet')
}