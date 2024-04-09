let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let index = 0
let count = 0
let answer = ''
let n = Number(input[index])
while (n !== 0) {
  count++
  answer += ('Case #' + count + ':\n')
  let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < n; i++) {
    index++
    let month = Number(input[index].split(' ')[1])
    array[month - 1]++
  }
  for (let i = 0; i < 12; i++) {
    answer += (months[i] + ':' + '*'.repeat(array[i]) + '\n')
  }
  index++
  n = Number(input[index])
}
console.log(answer)
