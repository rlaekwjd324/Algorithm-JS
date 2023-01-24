let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(101)
for (let i = 0; i < 101; i++) {
  array[i] = new Array(101)
}
let position = [50, 50]
array[50][50] = '.'
let moving = input[1].split('')
// directionIndex => 0 = '남', 1 = '서', 2 = '북', 3 = '동'
let directionIndex = 0
for (let i = 0; i < n; i++) {
  switch (moving[i]) {
    case 'R':
      directionIndex = (directionIndex + 1) % 4
      break
    case 'L':
      directionIndex = (directionIndex + 3) % 4
      break
    case 'F':
      switch (directionIndex) {
        case 0:
          position = [position[0], position[1] + 1]
          break
        case 1:
          position = [position[0] - 1, position[1]]
          break
        case 2:
          position = [position[0], position[1] - 1]
          break
        case 3:
          position = [position[0] + 1, position[1]]
          break
      }
      array[position[0]][position[1]] = '.'
      break
  }
}
let tempAnswer = []
for (var i = 0; i < 101;i++) {
  if (array[i].join('') !== '') {
    let line = ''
    for (var j = 0; j < 101;j++) {
      line += (array[i][j] === undefined ? '#' : array[i][j])
    }
    tempAnswer.push(line)
  }
}
let newArray = new Array(101)
for (var i = 0; i < 101; i++) {
  newArray[i] = new Array(tempAnswer.length)
}
for (var i = 0; i < tempAnswer.length; i++) {
  for (var j = 0; j < 101;j++) {
    newArray[j][i] = tempAnswer[i].split('')[j]
  }
}
let answer = ''
for (var i = 0; i < 101;i++) {
  if (newArray[i].join('') !== '#'.repeat(tempAnswer.length)) {
    let line = ''
    for (var j = 0; j < tempAnswer.length;j++) {
      line += (newArray[i][j] === undefined ? '#' : newArray[i][j])
    }
    answer += (line + '\n')
  }
}
console.log(answer.trim())
