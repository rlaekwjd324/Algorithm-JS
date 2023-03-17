let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0 0') {
  let n = input[index].split(' ')[0] // 파티 참가자 수
  let m = input[index].split(' ')[1] // 개최 비용
  index++
  let totalValue = 0
  for (let i = 0; i < n;i++) {
    totalValue += ((parseInt(input[index].split(' ')[i]) - m / n) >= 0 ? m / n : parseInt(input[index].split(' ')[i]))
  }
  index++
  answer += (totalValue + '\n')
}
console.log(answer)
