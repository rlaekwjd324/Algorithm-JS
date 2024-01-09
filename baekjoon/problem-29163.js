let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let w = input[1].split(' ').map(function (v) { return parseInt(v)})
let evenCount =0
let oddCount =0
for (let i = 0; i < n; i++) {
  if(w[i] % 2===0){
    evenCount++
  }else {
    oddCount++
  }
}
if(evenCount>oddCount){
  return console.log('Happy')
}
console.log('Sad')