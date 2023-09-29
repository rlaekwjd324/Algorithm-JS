let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0 0 0') {
  let numbers = input[index].split(' ').map(function (n) { return Number(n)})
  numbers.sort(function (a, b) {return a - b })
  if (numbers[0] + numbers[1] <= numbers[2]) {
    answer += 'Invalid\n'
  }else if (numbers[0] === numbers[2]) {
    answer += 'Equilateral\n'
  }else if (numbers[1] === numbers[0] || numbers[1] === numbers[2]) {
    answer += 'Isosceles\n'
  }else {
    answer += 'Scalene\n'
  }
  index++
}
console.log(answer)
