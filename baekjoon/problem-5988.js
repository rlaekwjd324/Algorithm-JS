let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0])
let answer = ''
for (let i = 1; i <= a; i++) {
  let number = input[i].split('')
  let lastNumber = number[number.length - 1]
  if (lastNumber % 2 === 0) {
    answer += 'even\n'
  }else {
    answer += 'odd\n'
  }
}
console.log(answer)
