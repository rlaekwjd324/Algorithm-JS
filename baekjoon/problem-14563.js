let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
let nums = input[1].split(' ')
for (let i = 0; i < n; i++) {
  let sum = getDivNums(Number(nums[i]))
  if (sum > Number(nums[i])) {
    answer += 'Abundant\n'
  }else if (sum < Number(nums[i])) {
    answer += 'Deficient\n'
  }else {
    answer += 'Perfect\n'
  }
}
console.log(answer)

function getDivNums (number) {
  let sum = 0
  for (let i = 1; i < Math.abs(number); i++) {
    if (number % i === 0) {
      sum += i
    }
  }
  return sum
}
