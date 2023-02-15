const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let n = parseInt(input[0].split(' ')[0])
  let answer = ''
  for (let i = 1; i <= n; i++) {
    let first = parseInt(input[i].split(' ')[0].split('').reverse().join(''))
    let second = parseInt(input[i].split(' ')[1].split('').reverse().join(''))
    answer += (parseInt((first + second).toString().split('').reverse().join('')) + '\n')
  }
  console.log(answer)
  process.exit()
})
