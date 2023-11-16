let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let m = Number(input[0].split(' ')[2])
let array = new Array(n)
for (let i = 0; i < n; i++) {
  array[i] = i + 1
}
let answer = ''
let index = 0
let count = 0
let isReverse = false
for (let i = 0; i < n; i++) {
  if (count === m) {
    count = 0
    isReverse = !isReverse
  }
  count++
  let temp = ''
  if (isReverse) {
    index = array.length - (index - 1 + k) % array.length - 1
  }else {
    index = (index - 1 + k) % array.length
  }
  temp = array[index]
  array.splice(index, 1)
  answer += (temp + '\n')
}
console.log(answer)
