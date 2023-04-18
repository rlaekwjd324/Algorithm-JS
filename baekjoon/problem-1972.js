let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '*') {
  let isSurprising = true
  for (let i = 0; i <= input[index].length - 2; i++) {
    isSurprising = true
    let array = []
    for (let j = 0; j <= input[index].length - 2 - i; j++) {
      if (array.includes(input[index].split('')[j] + input[index].split('')[j + i + 1])) {
        isSurprising = false
        break
      }
      array.push(input[index].split('')[j] + input[index].split('')[j + i + 1])
    }
    if (!isSurprising) {
      answer += (input[index] + ' is NOT surprising.\n')
      break
    }
  }
  if (isSurprising) {
    answer += (input[index] + ' is surprising.\n')
  }
  index++
}
console.log(answer)
