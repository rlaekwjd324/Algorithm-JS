let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let serch = input[1].split(' ').map(function (v) { return parseInt(v)})
let view = input[2].split(' ').map(function (v) { return parseInt(v)})
let answer = 0
selectWork(0, 0, -1)
console.log(answer)
function selectWork (count, sum, beforePosition) {
  if (count === n) {
    if (sum >= m) {
      answer++
    }
    return
  }
  for (let i = 0; i < 3; i++) {
    if (beforePosition === i) {
      selectWork(count + 1, sum + serch[i] / 2, i)
      selectWork(count + 1, sum + view[i] / 2, i)
    }else {
      selectWork(count + 1, sum + serch[i], i)
      selectWork(count + 1, sum + view[i], i)
    }
  }
}
