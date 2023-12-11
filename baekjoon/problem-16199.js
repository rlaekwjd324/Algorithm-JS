let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let year = Number(input[0].split(' ')[0])
let month = Number(input[0].split(' ')[1])
let day = Number(input[0].split(' ')[2])
let todayYear = Number(input[1].split(' ')[0])
let todayMonth = Number(input[1].split(' ')[1])
let todayDay = Number(input[1].split(' ')[2])
let temp = todayYear - year - 1
if (month < todayMonth || (month === todayMonth && day <= todayDay)) {
  temp++
}
console.log(temp + '\n' + (todayYear - year + 1) + '\n' + (todayYear - year))
