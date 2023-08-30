let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let array = []
  array.push(Number(input[i].split(' ')[0]))
  array.push(Number(input[i].split(' ')[1]))
  array.push(Number(input[i].split(' ')[2]))
  array.sort(function (a, b) { return a - b})
  answer += ('Case #' + i + ': ')
  if (array[0] * array[0] + array[1] * array[1] === array[2] * array[2]) {
    answer += 'YES\n'
  }else {
    answer += 'NO\n'
  }
}
console.log(answer)
