let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let w = parseInt(input[0].split(' ')[0])
let p = parseInt(input[0].split(' ')[1])
let l = input[1].split(' ').map(function (v) {return parseInt(v)})
let possibleRoomWidths = []
possibleRoomWidths.push(w)
for (let i = 0; i < p; i++) {
  if (!possibleRoomWidths.includes(l[i])) {
    possibleRoomWidths.push(l[i])
  }
  if (!possibleRoomWidths.includes(w - l[i])) {
    possibleRoomWidths.push(w - l[i])
  }
  for (let j = 0; j < i; j++) {
    if (!possibleRoomWidths.includes(l[i] - l[j])) {
      possibleRoomWidths.push(l[i] - l[j])
    }
  }
}
possibleRoomWidths.sort(function (a, b) { return a - b})
console.log(possibleRoomWidths.join(' '))
