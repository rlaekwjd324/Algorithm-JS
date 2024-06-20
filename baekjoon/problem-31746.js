let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let num = n[n.length - 1]
let word = 'SciComLove'.split('')
if (num % 2 === 1) {
  return console.log(word.reverse().join(''))
}
console.log(word.join(''))
