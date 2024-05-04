const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let n = Number(input[0])
  let x = Number(input[1])
  let value = 0
  let index = 1
  for (let i = 0; i < n; i++) {
    index++
    let p1 = Number(input[index].split(' ')[0])
    let p2 = Number(input[index].split(' ')[1])
    if (Math.abs(p1 - p2) > x) {
      index++
      value += Number(input[index])
    }else {
      value += Math.max(p1, p2)
    }
  }
  console.log(value)
  process.exit()
})
