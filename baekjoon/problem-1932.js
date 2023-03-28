let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(n)
for (let i = 0; i < n; i++) {
  array[i] = input[i + 1].split(' ').map(function (v) {return parseInt(v)})
}
let max = 0
selectNumber(0, 0, array[0][0])
function selectNumber (layer, index, sum) {
  if (layer === n - 2) {
    max = Math.max(max, sum + array[layer + 1][index])
    max = Math.max(max, sum + array[layer + 1][index + 1])
    return
  }
  selectNumber(layer + 1, index, sum + array[layer + 1][index])
  selectNumber(layer + 1, index + 1, sum + array[layer + 1][index + 1])
}
console.log(max)
