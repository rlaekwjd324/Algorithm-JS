let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let nowBuildings = input[1].split(' ').map(function (v) {return parseInt(v)})
let preBuildings = input[2].split(' ').map(function (v) {return parseInt(v)})
let maxDiv = 0
for (let i = 0;i < m;i++) {
  if (i >= n) {
    maxDiv = Math.max(maxDiv, preBuildings[i])
  }else {
    maxDiv = Math.max(maxDiv, (preBuildings[i] - nowBuildings[i]))
  }
}
console.log(maxDiv)
