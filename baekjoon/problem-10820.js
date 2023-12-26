const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let answer = ''
  for (let j = 0; j < input.length; j++) {
    let word = input[j].split('')
    let answers = [0, 0, 0, 0]
    for (let i = 0; i < word.length; i++) {
      let temp = word[i].charCodeAt(0)
      if (temp >= 97 && temp <= 122) {
        answers[0]++
        continue
      }
      if (temp >= 65 && temp <= 90) {
        answers[1]++
        continue
      }
      if (temp >= 48 && temp <= 57) {
        answers[2]++
        continue
      }
      if (temp === 32) {
        answers[3]++
        continue
      }
    }
    answer += (answers.join(' ') + '\n')
  }
  console.log(answer.trim())
  process.exit()
})
