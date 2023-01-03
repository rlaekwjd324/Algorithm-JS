let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let count = 0
let answer = ''
while(input[index] !== '0') {
  let n = input[index]
  index++
  count++
  let sum = parseInt(input[index])
  for (let i = 1; i < n; i++) {
    index++
    let array = []
    let numbers = input[index].split(' ')
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] !== '' && numbers[j].length > 0) {
        array.push(parseInt(numbers[j]))
      }
    }
    if (i === n - 1) {
      for (let j = 0; j < array.length; j++) {
        sum += array[j]
      }
    }else {
      sum += (array[0] + array[array.length - 1])
    }
  }
  answer += ('Case #' + count + ':' + sum + '\n')
  index++
}
console.log(answer)
