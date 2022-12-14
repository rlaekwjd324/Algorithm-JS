let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
let ganStrength = [1, 2, 3, 3, 4, 10]
let souStrength = [1, 2, 2, 2, 3, 5, 10]
for (let i = 1; i <= t; i++) {
  let ganArmy = input[i * 2 - 1].split(' ').map(function (v) { return parseInt(v); })
  let souArmy = input[i * 2].split(' ').map(function (v) { return parseInt(v); })
  let ganSum = 0
  let souSum = 0
  for (let j = 0; j < 6;j++) {
    ganSum += (ganArmy[j] * ganStrength[j])
    souSum += (souArmy[j] * souStrength[j])
  }
  souSum += (souArmy[6] * souStrength[6])
  answer += ('Battle ' + i + ': ' + (ganSum > souSum ? 'Good triumphs over Evil\n' : ganSum === souSum ? 'No victor on this battle field\n' : 'Evil eradicates all trace of Good\n'))
}
console.log(answer)
