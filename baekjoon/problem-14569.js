let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let kArray = new Array(n)
let subject = new Array(n)
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(function (v) {return parseInt(v)})
  subject[i - 1] = new Array(50)
  kArray[i - 1] = line[0]
  for (let j = 0; j < line[0];j++) {
    subject[i - 1][line[j + 1] - 1] = true
  }
}
let m = parseInt(input[n + 1])
let answer = ''
for (let i = 0;i < m;i++) {
  let count = 0
  let line = input[i + 2 + n].split(' ').map(function (v) {return parseInt(v)})
  let tempArray = new Array(50)
  for (let j = 0; j < line[0];j++) {
    tempArray[line[j + 1] - 1] = true
  }
  for (let j = 0; j < n; j++) {
    let tempCount = 0
    for (let w = 0;w < 50;w++) {
      if (subject[j][w] && tempArray[w]) {
        tempCount++
      }
    }
    if (tempCount === kArray[j]) {
      count++
    }
  }
  answer += (count + '\n')
}
console.log(answer)
