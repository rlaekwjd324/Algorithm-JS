let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = input[1].split('')
let word = ['B', 'R', 'O', 'N', 'Z', 'E', 'S', 'I', 'L', 'V']
let count = [1, 2, 1, 1, 1, 2, 1, 1, 1, 1]
let newCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < n; i++) {
  newCount[word.indexOf(array[i])]++
}
let min = 1000
for (let i = 0; i < count.length; i++) {
  min = Math.min(min, parseInt(newCount[i] / count[i]))
}
console.log(min)
