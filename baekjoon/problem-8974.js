let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let array = []
let index = 1
let temp = 0
let answer = 0
for (let i = 1; i <= 1000; i++) {
  array.push(index)
  temp++
  if (i >= a) {
    answer += index
  }
  if (temp === index) {
    index++
    temp = 0
  }
  if(i>=b){
    return console.log(answer)
  }
}
