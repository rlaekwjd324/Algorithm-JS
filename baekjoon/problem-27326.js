let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
// let n = Number(input[0])
let nums = input[1].split(' ')
let array = []
for (let i = 0; i < nums.length; i++) {
  if (array.includes(nums[i])) {
    array.splice(array.indexOf(nums[i]), 1)
  }else {
    array.push(nums[i])
  }
}
console.log(array[0])
