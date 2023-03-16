let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let max = 0
let min = 1000000000
let n = input[0].split('')
countOdd(0)
console.log(min + ' ' + max)
function countOdd (count) {
  for (let i = 0;i < n.length;i++) {
    if (n[i] % 2 === 1) {
      count++
    }
  }
  if (n.length === 1) {
    max = Math.max(max, count)
    min = Math.min(min, count)
    return
  }
  if (n.length === 2) {
    n = (parseInt(n[1]) + parseInt(n[0])).toString().split('')
    countOdd(count)
  }else if (n.length >= 3) {
    let temp = JSON.parse(JSON.stringify(n))
    for (let i = 0;i < n.length - 2;i++) {
      for (let j = i + 1;j < n.length - 1;j++) {
        n = (parseInt(n.slice(0, i + 1).join('')) + parseInt(n.slice(i + 1, j + 1).join('')) + parseInt(n.slice(j + 1, n.length).join(''))).toString().split('')
        countOdd(count)
        n = JSON.parse(JSON.stringify(temp))
      }
    }
  }
}
