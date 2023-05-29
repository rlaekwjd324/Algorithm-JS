let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = parseInt(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let n = parseInt(input[i])
  let array = new Array(n + 2)
  for (let j = 0; j < array.length; j++) {
    array[j] = 0
  }
  let divNum = 2
  while(n > 1) {
    while (n % divNum === 0) {
      array[divNum]++
      n = n / divNum
    }
    divNum++
  }
  for (let j = 2; j < array.length; j++) {
    if (array[j] > 0) {
      answer += (j + ' ' + array[j] + '\n')
    }
  }
}
console.log(answer)
