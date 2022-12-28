let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split('')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')[0].split('')
let aCount = 0
let bCount = 0
for (let i = 0; i < input.length; i++) {
  if (input[i] === 'A') {
    aCount++
  }else if (input[i] === 'B') {
    bCount++
  }
}
console.log(aCount + ' : ' + bCount)
