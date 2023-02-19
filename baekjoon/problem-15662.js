let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let cogwheels = new Array(t)
for (let i = 0; i < t; i++) {
  cogwheels[i] = input[i + 1].split('')
}
let k = parseInt(input[t + 1])
for (let i = 0; i < k; i++) {
  let number = parseInt(input[i + t + 2].split(' ')[0])
  let direction = parseInt(input[i + t + 2].split(' ')[1])
  let tempDirection = direction * -1
  if (direction === 1) {
    let temp = cogwheels[number - 1][7]
    cogwheels[number - 1].unshift(temp)
    cogwheels[number - 1].pop()
  }else {
    let temp = cogwheels[number - 1][0]
    cogwheels[number - 1].shift()
    cogwheels[number - 1].push(temp)
  }
  for (j = number - 2; j >= 0; j--) {
    if (cogwheels[j + 1][6 - tempDirection] === cogwheels[j][2]) {
      break
    }
    if (tempDirection === 1) {
      let temp = cogwheels[j][7]
      cogwheels[j].unshift(temp)
      cogwheels[j].pop()
    }else {
      let temp = cogwheels[j][0]
      cogwheels[j].shift()
      cogwheels[j].push(temp)
    }
    tempDirection = tempDirection * -1
  }
  tempDirection = direction * -1
  for (j = number; j < t; j++) {
    if (cogwheels[j - 1][2 - tempDirection] === cogwheels[j][6]) {
      break
    }
    if (tempDirection === 1) {
      let temp = cogwheels[j][7]
      cogwheels[j].unshift(temp)
      cogwheels[j].pop()
    }else {
      let temp = cogwheels[j][0]
      cogwheels[j].shift()
      cogwheels[j].push(temp)
    }
    tempDirection = tempDirection * -1
  }
}
let count = 0
for (let i = 0; i < t; i++) {
  if (cogwheels[i][0] === '1') {
    count++
  }
}
console.log(count)
