const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let x = parseInt(input[0])
  let n = parseInt(input[1])
  let sum = 0
  for (let i = 2; i < n + 2; i++) {
    sum += (x - parseInt(input[i]))
  }
  console.log(sum + x)
  process.exit()
})
