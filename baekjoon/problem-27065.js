let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t;i++) {
  let year = parseInt(input[i])
  let divedArray = getDivedArray(year)
  let sum = 0
  for (let j = 0; j < divedArray.length - 1;j++) {
    sum += divedArray[j]
  }
  if (sum > year) {
    for (let j = 0; j < divedArray.length - 1;j++) {
      let tempArray = getDivedArray(divedArray[j])
      let tempSum = 0
      for (let w = 0; w < tempArray.length - 1;w++) {
        tempSum += tempArray[w]
      }
      if (tempSum > divedArray[j]) {
        answer += 'BOJ 2022\n'
        break
      }
      if (j === divedArray.length - 2) {
        answer += 'Good Bye\n'
      }
    }
  }else {
    answer += 'BOJ 2022\n'
  }
}
console.log(answer)
function getDivedArray (tempYear) {
  let array = []
  for (let j = 1; j <= Math.sqrt(tempYear); j++) {
    if (tempYear % j === 0) {
      array.push(j)
      if (j !== tempYear / j) {
        array.push(tempYear / j)
      }
    }
  }
  array.sort(function (a, b) { return a - b})
  return array
}
