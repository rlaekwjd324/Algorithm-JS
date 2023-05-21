let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '0') {
  let n = parseInt(input[index++])
  let word = input[index++]
  let col = parseInt(word.length / n)
  if (word.length % n !== 0) {
    col++
  }
  word = word + 'x'.repeat(col * n - word.length)
  let line = ''
  let array = new Array(col)
  for (let i = 0; i < col; i++) {
    array[i] = new Array(n)
    if (i % 2 === 0) {
      array[i] = word.substring(i * n, i * n + n).split('')
    }else {
      array[i] = word.substring(i * n, i * n + n).split('').reverse()
    }
  }
  for (j = 0; j < n; j++) {
    for (i = 0; i < col; i++) {
      line += array[i][j]
    }
  }
  answer += (line + '\n')
}
console.log(answer)
