let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let startNumber = parseInt(input[0].split(' ')[0])
let endNumber = parseInt(input[0].split(' ')[1])
let comparedNumber = parseInt(input[0].split(' ')[2])
let count = 0
for (let i = startNumber; i <= endNumber; i++) {
  let tempNumber = i.toString().split('')
  for (let j = 0; j < tempNumber.length; j++) {
    if (tempNumber[j] === comparedNumber.toString()) {
      count++
    }
  }
}
console.log(count)
