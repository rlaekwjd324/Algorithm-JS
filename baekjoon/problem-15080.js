let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = input[0].split(':')
let aHour = parseInt(a[0].split(' ')[0])
let aMinute = parseInt(a[1].split(' ')[1])
let aSecond = parseInt(a[2].split(' ')[1])
let b = input[1].split(':')
let bHour = parseInt(b[0].split(' ')[0])
let bMinute = parseInt(b[1].split(' ')[1])
let bSecond = parseInt(b[2].split(' ')[1])
let second = bSecond - aSecond
if (second < 0) {
  second += 60
  bMinute--
}
let minute = bMinute - aMinute
if (minute < 0) {
  minute += 60
  bHour--
}
let hour = bHour - aHour
if (hour < 0) {
  hour += 24
}
console.log(hour * 3600 + minute * 60 + second)
