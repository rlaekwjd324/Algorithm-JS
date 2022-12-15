const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let sum = 0
  for (let i = 1; i <= Number(input[0]); i++) {
    let n = input[i]
    sum += Math.pow(Number(n.substring(0, n.length - 1)), Number(n.charAt(n.length - 1)))
  }
  console.log(sum)
  process.exit()
})
