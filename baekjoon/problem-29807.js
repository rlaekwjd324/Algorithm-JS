let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = []
for (let i = 0; i < 5; i++) {
  if (i < n) {
    array.push(Number(input[1].split(' ')[i]))
  }else {
    array.push(0)
  }
}
let sum = 0
if (array[0] > array[2]) {
  sum += ((array[0] - array[2]) * 508)
}else {
  sum += ((array[2] - array[0]) * 108)
}
if (array[1] > array[3]) {
  sum += ((array[1] - array[3]) * 212)
}else {
  sum += ((array[3] - array[1]) * 305)
}
sum += (array[4] * 707)
console.log(sum * 4763)
