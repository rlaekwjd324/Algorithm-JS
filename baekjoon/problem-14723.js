let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let a = 0
let b = 0
let count = 0
let sum = 0
while (true) {
  count++
  a = count
  b = 1
  for (let j = 1; j <= count; j++) {
    sum++
    if(sum === n) {
      return console.log(a+' '+b)
    }
    a--
    b++
  }
}
