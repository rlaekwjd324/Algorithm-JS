let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while(input[index] !== '#') {
  let line = input[index].split(' ')
  let c = 0
  let t = 0
  for (let i = 0; i < line.length - 1; i++) {
    if (parseInt(line[i]) % 2 === 0) {
      t++
    }else {
      c++
    }
  }
  answer += (t === c ? 'Draw\n' : (t > c ? 'Tania\n' : 'Cheryl\n'))
  index++
}
console.log(answer)
