let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let index = 0
let answer = ''
for (let i = 1; i <= t; i++) {
  index++
  let n = parseInt(input[index].split(' ')[0])
  let d = parseInt(input[index].split(' ')[1])
  let array = new Array(n)
  for (let j = 0; j < n; j++) {
    index++
    array[j] = input[index].split(' ').map(function (v) { return parseInt(v)})
  }
  d = (d + 360) % 360
  for (let w = 0; w < parseInt(d / 45); w++) {
    let tempArray = new Array(n)
    for (var j = 0;j < n;j++) {
      tempArray[j] = array[j][j]
    }
    // X의 가운데 행을 X의 주 대각선으로 옮긴다.
    for (var j = 0;j < n;j++) {
      array[j][j] = array[(n + 1) / 2 - 1][j]
    }
    // X의 부 대각선을 X의 가운데 행 ((n+1)/2번째 행)으로 옮긴다.
    for (var j = 0;j < n;j++) {
      array[(n + 1) / 2 - 1][n - j - 1] = array[j][n - j - 1]
    }
    // X의 가운데 열을 X의 부 대각선으로 ((n, 1), (n-1, 2), …, (1, n)) 옮긴다. 
    for (var j = 0;j < n;j++) {
      array[j][n - j - 1] = array[j][(n + 1) / 2 - 1]
    }
    // X의 주 대각선을 ((1,1), (2,2), …, (n, n)) 가운데 열 ((n+1)/2 번째 열)로 옮긴다.
    for (var j = 0;j < n;j++) {
      array[j][(n + 1) / 2 - 1] = tempArray[j]
    }
  }
  for (let j = 0; j < n; j++) {
    answer += (array[j].join(' ') + '\n')
  }
}
console.log(answer)
