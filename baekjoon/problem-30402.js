let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = []
for (let i = 0; i <15; i++) {
  for (let j = 0; j <15; j++) {
    array.push(input[i].split(' ')[j])
  }
}
if(array.includes('w')){
  return console.log('chunbae')
}
if(array.includes('b')){
  return console.log('nabi')
}
if(array.includes('g')){
  return console.log('yeongcheol')
}
