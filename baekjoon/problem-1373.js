const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let n = input[0].split('')
  let temp = ''
  let answer = []
  for (let i = 0; i < n.length; i++) {
    temp = n[n.length - i - 1] + temp
    if (temp.length === 3) {
      let sum = 0
      sum += (temp.split('')[0] === '1' ? 4 : 0)
      sum += (temp.split('')[1] === '1' ? 2 : 0)
      sum += (temp.split('')[2] === '1' ? 1 : 0)
      answer.unshift(sum)
      temp = ''
    } else if (i === n.length - 1) {
      let sum = 0
      if (temp.length === 2) {
        sum += (temp.split('')[0] === '1' ? 2 : 0)
        sum += (temp.split('')[1] === '1' ? 1 : 0)
      }else {
        sum += (temp.split('')[0] === '1' ? 1 : 0)
      }
      answer.unshift(sum)
    }
  }
  console.log(answer.join(''))
  process.exit()
})
