let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let homeworks = []
let scores = 0
for (let i = 1; i <= n; i++) {
  let isExist = input[i].split(' ')[0]
  if (isExist === '0') {
    if (homeworks.length > 0) {
      homeworks[homeworks.length - 1].time--
      if (homeworks[homeworks.length - 1].time === 0) {
        scores += homeworks[homeworks.length - 1].score
        homeworks.splice(homeworks.length - 1, 1)
      }
    }
  }else {
    let a = Number(input[i].split(' ')[1])
    let t = Number(input[i].split(' ')[2])
    if (t <= 1) {
      scores += a
    }else {
      homeworks.push({id: 1, score: a, time: t - 1})
    }
  }
}
console.log(scores)
