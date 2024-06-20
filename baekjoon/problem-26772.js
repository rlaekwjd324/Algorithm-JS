let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = [
  ' @@@   @@@ ',
  '@   @ @   @',
  '@    @    @',
  '@         @',
  ' @       @ ',
  '  @     @  ',
  '   @   @   ',
  '    @ @    ',
  '     @     '
]
let answer = ''
for (let i = 0; i < array.length; i++) {
  answer += ((array[i] + ' ').repeat(n) + '\n')
}
console.log(answer)
