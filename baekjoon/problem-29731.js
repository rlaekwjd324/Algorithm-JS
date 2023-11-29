let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = [
  'Never gonna give you up'
  , 'Never gonna let you down'
  , 'Never gonna run around and desert you'
  , 'Never gonna make you cry'
  , 'Never gonna say goodbye'
  , 'Never gonna tell a lie and hurt you'
  , 'Never gonna stop'
]
for (let i = 1; i <= n; i++) {
  if(!array.includes(input[i])) {
    return console.log('Yes')
  }
}
console.log('No')