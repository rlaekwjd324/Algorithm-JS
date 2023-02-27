let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(n)
for (let i = 0;i < n;i++) {
  array[i] = { }
  array[i].count = parseInt(input[i + 1].split(' ')[0])
  array[i].score = parseInt(input[i + 1].split(' ')[1])
}
array.sort(function (a, b) {
  if (a.count === b.count) {
    return b.score - a.score
  }
  return b.count - a.count
})
let answer = 0
for (let i = 5; i < n; i++) {
  if (array[4].count !== array[i].count) {
    break
  }
  answer++
}
console.log(answer)
