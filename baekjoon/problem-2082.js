let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let numbers = [
  ['###', '#.#', '#.#', '#.#', '###'],
  ['..#', '..#', '..#', '..#', '..#'],
  ['###', '..#', '###', '#..', '###'],
  ['###', '..#', '###', '..#', '###'],
  ['#.#', '#.#', '###', '..#', '..#'],
  ['###', '#..', '###', '..#', '###'],
  ['###', '#..', '###', '#.#', '###'],
  ['###', '..#', '..#', '..#', '..#'],
  ['###', '#.#', '###', '#.#', '###'],
  ['###', '#.#', '###', '..#', '###']
]
let answer = ''
for (let i = 0; i < 4;i++) {
  for (let w = 0;w < numbers.length;w++) {
    let isNotRightNumber = false
    for (let j = 0; j < 5; j++) {
      let line = input[j].split(' ')[i]
      if ((numbers[w][j].charAt(0) === '#' || line.charAt(0) === numbers[w][j].charAt(0))
        && (numbers[w][j].charAt(1) === '#' || line.charAt(1) === numbers[w][j].charAt(1))
        && (numbers[w][j].charAt(2) === '#' || line.charAt(2) === numbers[w][j].charAt(2))
      ) {
        continue
      }else {
        isNotRightNumber = true
        break
      }
    }
    if (!isNotRightNumber) {
      answer += w
      if (i === 1) {
        answer += ':'
      }
      break
    }
  }
}
console.log(answer)
