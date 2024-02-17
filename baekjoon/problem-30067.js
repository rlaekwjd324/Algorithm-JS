let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('test.txt').toString().trim()
let numbers = input.split('\n').map(function (v) { return Number(v)})
for (let i = 0; i < 10; i++) {
  let sum = 0
  for (let j = 0; j < 10; j++) {
    if(j!==i) {
      sum += numbers[j]
    }
  }
  if(sum === numbers[i]){
    return console.log(numbers[i])
  }
}
