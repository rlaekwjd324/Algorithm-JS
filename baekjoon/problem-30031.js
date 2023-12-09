let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let sum = 0
for (let i = 1; i <= n; i++) {
  let temp = input[i].split(' ')[0]
  switch (temp) {
    case '136':
      sum += 1000
      break
    case '142':
      sum += 5000
      break
    case '148':
      sum += 10000
      break
    case '154':
      sum += 50000
      break
  }
}
console.log(sum)
