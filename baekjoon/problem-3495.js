let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let h = parseInt(input[0].split(' ')[0])
let w = parseInt(input[0].split(' ')[1])
let sum = 0
for (let i = 0; i < h; i++) {
  let start = false
  let line = input[i + 1].split('')
  for (let j = 0;j < w; j++) {
    switch (line[j]) {
      case '/':
      case '\\':
        if (start) {
          start = false
        }else {
          start = true
        }
        sum += 0.5
        break
      case '.':
        if (start) {
          sum += 1
        }
        break
    }
  }
}
console.log(sum)
