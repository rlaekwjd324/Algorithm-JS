let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
  let first = input[i].split(' ')[0].split('')
  let second = input[i].split(' ')[1].split('')
  let isBank = 'YES'
  for (let j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      isBank = 'NO'
      break
    }
  }
  if (isBank === 'YES') {
    for (let j = 0; j < first.length; j++) {
      if (!second.includes(first[j])) {
        isBank = 'NO'
        break
      }
    }
  }
  answer += (isBank + '\n')
}
console.log(answer)
