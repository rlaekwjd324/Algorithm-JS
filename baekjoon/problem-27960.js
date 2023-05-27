let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = parseInt(input[0].split(' ')[0])
let b = parseInt(input[0].split(' ')[1])
let array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
let aArray = new Array(array.length)
let bArray = new Array(array.length)
let count = 0
for (let i = array.length - 1; i >= 0; i--) {
  if (a >= array[i]) {
    aArray[i] = true
    a -= array[i]
  }
  if (b >= array[i]) {
    bArray[i] = true
    b -= array[i]
  }
  if ((aArray[i] || bArray[i]) && aArray[i] !== bArray[i]) {
    count += array[i]
  }
}
console.log(count)
