let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] > 0) {
  let t = Number(input[index++])
  let numbers = input[index++].split(' ')
  let temp = 0
  let tempMinus = 100000
  for (let i = 0; i < t; i++) {
    if (Math.abs(numbers[i] - 2023) < tempMinus) {
      temp = i + 1
      tempMinus = Math.abs(numbers[i] - 2023)
    }
  }
  answer += (temp + '\n')
}
console.log(answer)
