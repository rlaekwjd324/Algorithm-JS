let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let d = Number(input[0].split(' ')[1])
let answer = ''
for (let i = 0; i < n; i++) {
  let temp = input[i + 1].split('')
  for (let j = 0; j < temp.length; j++) {
    switch (temp[j]) {
      case 'd':
        if (d === 1) {
          answer += 'q'
        }else {
          answer += 'b'
        }
        break
      case 'b':
        if (d === 1) {
          answer += 'p'
        }else {
          answer += 'd'
        }
        break
      case 'p':
        if (d === 1) {
          answer += 'b'
        }else {
          answer += 'q'
        }
        break
      case 'q':
        if (d === 1) {
          answer += 'd'
        }else {
          answer += 'p'
        }
        break
    }
  }
  answer += '\n'
}
console.log(answer)
