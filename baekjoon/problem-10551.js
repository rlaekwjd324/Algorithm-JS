let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('')
let count = [0, 0, 0, 0, 0, 0, 0, 0]
let keyboard = [['1', 'Q', 'A', 'Z'], ['2', 'W', 'S', 'X'], ['3', 'E', 'D', 'C'], ['4', 'R', 'F', 'V', '5', 'T', 'G', 'B'], ['6', '7', 'Y', 'U', 'H', 'J', 'N', 'M'], ['8', 'I', 'K', ','], ['9', 'O', 'L', '.'], ['0', '-', '=', 'P', '[', ']', ';', "'", '/']]
for (let i = 0; i < word.length; i++) {
  for (let j = 0;j < keyboard.length;j++) {
    if (keyboard[j].includes(word[i])) {
      count[j]++
    }
  }
}
console.log(count.join('\n'))
