let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] > 0) {
  let n = Number(input[index])
  let array = []
  for (let i = 0; i < n; i++) {
    index++
    for (let j = 0; j < input[index].split(' ').length; j++) {
      array.push(input[index].split(' ')[j])
    }
  }
  let isContainAll = true
  for (let i = 1; i <= 49; i++) {
    if (!array.includes(i.toString())) {
      isContainAll = false
      break
    }
  }
  if (isContainAll) {
    answer += ('Yes\n')
  }else {
    answer += ('No\n')
  }
  index++
}
console.log(answer)
