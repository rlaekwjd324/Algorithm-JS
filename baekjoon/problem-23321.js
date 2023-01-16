let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = ''
let preDance = '.omln'.split('')
let postDance = 'owln.'.split('')
let students = new Array(5)
for (let i = 0; i < 5; i++) {
  students[i] = input[i].split('')
}
for (let j = 0; j < students[0].length; j++) {
  switch (students[1][j]) {
    case 'o':
      // 도약 준비
      for (var i = 0; i < 5;i++) {
        students[i][j] = postDance[i]
      }
      break
    case 'w':
      // 도약 중
      for (var i = 0; i < 5;i++) {
        students[i][j] = preDance[i]
      }
      break
    case '.':
      // 착석
      break
  }
}
for (i = 0; i < 5; i++) {
  answer += (students[i].join('') + '\n')
}
console.log(answer)
