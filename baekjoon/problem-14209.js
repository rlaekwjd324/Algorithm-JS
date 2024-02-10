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
  let score = 0
  for (let i = 1; i <= n; i++) {
    let word = input[i].split('')
    for (let j = 0; j <= word.length; j++) {
      switch (word[j]) {
        case 'A':
          score += 4
          break
        case 'K':
          score += 3
          break
        case 'Q':
          score += 2
          break
        case 'J':
          score += 1
          break
      }
    }
  }
  console.log(score)
  process.exit()
})
