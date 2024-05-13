let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] > 0) {
  let n = Number(input[index])
  index++
  let nums = input[index].split(' ')
  let count = 0
  for (let i = 1; i < n - 1; i++) {
    if (Number(nums[i - 1]) < Number(nums[i]) && Number(nums[i]) > Number(nums[i + 1])) {
      count++
    }
  }
  index++
  answer += (count + '\n')
}
console.log(answer)
