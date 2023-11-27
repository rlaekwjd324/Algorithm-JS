let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let l = Number(input[0].split(' ')[1])
let maxBlackCount = 0
let maxZebraCount = 0
for (let i = 0; i < n; i++) {
  let temp = input[i + 1].replaceAll('0', ' ').replaceAll(/\s{2,}/gi, ' ').split(' ')
  let tempBlackCount = 0
  for (let j = 0; j < temp.length; j++) {
    if (temp[j] !== '') {
      tempBlackCount++
    }
  }
  if (tempBlackCount === maxBlackCount) {
    maxZebraCount++
  }else if (tempBlackCount > maxBlackCount) {
    maxZebraCount = 1
    maxBlackCount = tempBlackCount
  }
}
console.log(maxBlackCount + ' ' + maxZebraCount)
