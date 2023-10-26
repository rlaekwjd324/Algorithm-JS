let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = ['TTT', 'TTH', 'THT', 'THH', 'HTT', 'HTH', 'HHT', 'HHH']
let answer = ''
for (let i = 1; i <= n; i++) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0]
  let temp = input[i]
  for (let j = 0; j < temp.length - 2; j++) {
    let word = temp.substring(j, j + 3)
    count[array.indexOf(word)]++
  }
  answer += (count.join(' ') + '\n')
}
console.log(answer)
