let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let hour0 = Number(input[0].split(':')[0])
let min0 = Number(input[0].split(':')[1])
let sec0 = Number(input[0].split(':')[2])
let hour1 = Number(input[1].split(':')[0])
let min1 = Number(input[1].split(':')[1])
let sec1 = Number(input[1].split(':')[2])
let sec = sec1 - sec0
if (sec < 0) {
  sec += 60
  min1--
}
let min = min1 - min0
if (min < 0) {
  min += 60
  hour1--
}
let hour = hour1 - hour0
if (hour < 0) {
  hour += 24
}
if (hour === 0 && min === 0 && sec === 0) {
  hour = 24
}
if (sec < 10) {
  sec = '0' + sec
}
if (min < 10) {
  min = '0' + min
}
if (hour < 10) {
  hour = '0' + hour
}
console.log(hour + ':' + min + ':' + sec)
