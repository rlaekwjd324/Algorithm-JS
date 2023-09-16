let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(true) {
  let n = Number(input[index++])
  if (n === -1) {
    break
  }
  isPerfectNumber(n)
}
console.log(answer)
function isPerfectNumber (num) {
  let sum = 1
  let array = [1]
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i
      array.push(i)
      if (i !== Math.sqrt(num)) {
        sum += (num / i)
        array.push(num / i)
      }
    }
  }
  array.sort(function (a, b) {return a - b})
  if (sum === num) {
    answer += (num + ' = ' + array.join(' + ') + '\n')
  }else {
    answer += (num + ' is NOT perfect.\n')
  }
}
