let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0') {
  let num = input[index]
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    let fac = 1
    for (let j = 1; j <= num.length - i; j++) {
      fac *= j
    }
    sum += (fac * parseInt(num.charAt(i)))
  }
  index++
  answer += (sum + '\n')
}
console.log(answer)
