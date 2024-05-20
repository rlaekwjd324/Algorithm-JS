let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = input[0].substr(0, 5)
let count = 0
for (let i=0; i<Number(input[1]); i++) {
  let word = input[i+2].substr(0, 5)
  if (word === n) {
    count++
  }
}
console.log(count)
