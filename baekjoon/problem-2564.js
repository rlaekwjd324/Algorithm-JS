let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let w = parseInt(input[0].split(' ')[0])
let h = parseInt(input[0].split(' ')[1])
let n = parseInt(input[1])
let dx = parseInt(input[2 + n].split(' ')[0])
let dy = parseInt(input[2 + n].split(' ')[1])
let sumDist = 0
for (let i = 2; i < n + 2; i++) {
  let dist = 0
  let line = input[i].split(' ').map(function (v) { return parseInt(v)})
  switch (Math.abs(line[0] - dx)) {
    case 0:
      dist = Math.abs(line[1] - dy)
      break
    case 1:
      if ([2, 3].includes(line[0]) && [2, 3].includes(dx)) {
        if (dx === 2) {
          dist = dy + h - line[1]
        }else {
          dist = h - dy + line[1]
        }
      }else if (dx === 1 || dx === 2) {
        dist = h + Math.min((line[1] + dy), (w - line[1] + w - dy))
      }else {
        dist = w + Math.min((line[1] + dy), (h - line[1] + h - dy))
      }
      break
    default:
      if ([1, 3].includes(line[0]) && [1, 3].includes(dx)) {
        dist = dy + line[1]
      } else if ([1, 4].includes(line[0]) && [1, 4].includes(dx)) {
        if (dx === 1) {
          dist = w - dy + line[1]
        }else {
          dist = dy + w - line[1]
        }
      }else if ([2, 4].includes(line[0]) && [2, 4].includes(dx)) {
        dist = w + h - dy - line[1]
      }
      break
  }
  sumDist += dist
}
console.log(sumDist)
