let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0]
let array = 'MOBIS'.split('')
for (let i = 0; i <array.length; i++) {
  if(!word.includes(array[i])) {
    return console.log('NO')
  }
}
console.log('YES')