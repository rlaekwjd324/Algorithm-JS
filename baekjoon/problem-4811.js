let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
let words = []
let n = 0
while(input[index] !== '0') {
  n = parseInt(input[index])
  words = []
  selectPill(1, 0, 'W')
  answer += (words.length + '\n')
  index++
}
console.log(answer)
function selectPill (wCount, hCount, word) {
  if (word.length === 2 * n) {
    words.push(word)
    return
  }
  if (wCount === n) {
    if (!words.includes(word + 'H'.repeat(n - hCount))) {
      words.push(word + 'H'.repeat(n - hCount))
    }
    return
  }
  if (wCount < n && !words.includes(word + 'W')) {
    selectPill(wCount + 1, hCount, word + 'W')
  }
  if (wCount > hCount && !words.includes(word + 'H')) {
    selectPill(wCount, hCount + 1, word + 'H')
  }
}
