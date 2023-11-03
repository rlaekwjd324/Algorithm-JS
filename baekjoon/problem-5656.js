let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index].split(' ')[1] !== 'E') {
  answer += ('Case ' + (index + 1) + ': ' + cal(input[index]) + '\n')
  index++
}
console.log(answer)

function cal (temp) {
  let num1 = Number(temp.split(' ')[0])
  let cal = temp.split(' ')[1]
  let num2 = Number(temp.split(' ')[2])
  switch (cal) {
    case '>':
      if (num1 > num2)
        return true
      return false
    case '>=':
      if (num1 >= num2)
        return true
      return false
    case '<':
      if (num1 < num2)
        return true
      return false
    case '<=':
      if (num1 <= num2)
        return true
      return false
    case '==':
      if (num1 === num2)
        return true
      return false
    case '!=':
      if (num1 !== num2)
        return true
      return false
  }
}
