let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let count = 0
back(0, 1)
function back (sum, tempCount) {
  // 1X2
  if (sum + 1 < n) {
    back(sum + 1, tempCount)
  }else if (sum + 1 === n) {
    count += tempCount
  }
  // 2X1
  if (sum + 2 < n) {
    back(sum + 2, tempCount * 2)
  }else if (sum + 2 === n) {
    count += tempCount*2
  }
// 2X2
//   back(sum + 2)
}
console.log(count % 10007)
