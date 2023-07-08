let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let directions = ['N', 'E', 'S', 'W']
let nowDirection = 0
for (let i = 0; i < 10; i++) {
  let direction = input[i]
  switch (direction) {
    case '1':
      // 우양 우
      nowDirection = (nowDirection + 1) % 4
      break
    case '2':
      // 뒤로 돌아
      nowDirection = (nowDirection + 2) % 4
      break
    case '3':
      // 좌양 좌
      nowDirection = (nowDirection + 3) % 4
      break
  }
}
console.log(directions[nowDirection])
