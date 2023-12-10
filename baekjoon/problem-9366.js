let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let array = input[i].split(' ').map(function (v) { return Number(v)})
  array.sort(function (a, b) { return a - b })
  if (array[0] === array[1] && array[1] === array[2]) {
    answer += ('Case #' + i + ': equilateral\n')
  }else if (array[0] + array[1] <= array[2]) {
    answer += ('Case #' + i + ': invalid!\n')
  }else if (array[0] === array[1] || array[1] === array[2]) {
    answer += ('Case #' + i + ': isosceles\n')
  }else {
    answer += ('Case #' + i + ': scalene\n')
  }
}
console.log(answer)
