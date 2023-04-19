let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '0') {
  let count = 0
  let array = []
  while(true) {
    let temp = (Number(input[index]) * Number(input[index])).toString()
    temp = '0'.repeat(8 - temp.length) + temp
    input[index] = temp.substring(2, temp.length - 2)
    if (array.includes(temp)) {
      answer += (count + '\n')
      break
    }
    count++
    array.push(temp)
  }
  index++
}
console.log(answer)
