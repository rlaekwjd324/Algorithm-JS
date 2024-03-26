let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '# 0') {
  let airline = input[index].split(' ')[0]
  let count = Number(input[index].split(' ')[1])
  index++
  while (input[index] !== 'X 0') {
    let type = input[index].split(' ')[0]
    let temp = Number(input[index].split(' ')[1])
    if (type === 'B' && count + temp <= 68) {
      count += temp
    }else if (type === 'C' && count - temp >= 0) {
      count -= temp
    }
    index++
  }
  answer += (airline + ' ' + count + '\n')
  index++
}
console.log(answer)
