let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0') {
  let round = 0
  let n = parseInt(input[index])
  let array = []
  for (let i = 0; i < n; i++) {
    index++
    array.push(parseInt(input[index]))
  }
  while(true) {
    let tempArray = []
    for (let i = 0; i < n; i++) {
      tempArray.push(0)
    }
    round++
    for (let i = 0; i < n; i++) {
      tempArray[(i + 1) % n] += parseInt(array[i] / 2)
      tempArray[i] -= parseInt(array[i] / 2)
    }
    for (i = 0; i < n; i++) {
      array[i] = array[i] + tempArray[i]
      if (array[i] % 2 === 1) {
        array[i] += 1
      }
    }
    let isEnd = true
    for (i = 0; i < n - 1; i++) {
      if (array[i] !== array[i + 1]) {
        isEnd = false
        break
      }
    }
    if (isEnd) {
      break
    }
  }
  answer += (round + ' ' + array[i] + '\n')
  index++
}
console.log(answer)
