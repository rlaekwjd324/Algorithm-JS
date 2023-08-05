const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let a = Number(input[0])
  let b = Number(input[1])
  let c = Number(input[2])
  let answer = ''
  for (let i = a; i <= b; i++) {
    let num = i.toString()
    let sum = 0
    for (let j = 0; j < num.length; j++) {
      sum += Number(num.charAt(j))
    }
    if (sum === c) {
      answer += (i + '\n')
      break
    }
  }
  for (let i = b; i >= a; i--) {
    let num = i.toString()
    let sum = 0
    for (let j = 0; j < num.length; j++) {
      sum += Number(num.charAt(j))
    }
    if (sum === c) {
      answer += (i + '\n')
      break
    }
  }
  console.log(answer)
  process.exit()
})
