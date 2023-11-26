let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let today = new Date(input[0]).toISOString()
let n = Number(input[1])
let count = 0
for (let i = 0; i < n; i++) {
  let date = new Date(input[i + 2]).toISOString()
  if (today <= date) {
    count++
  }
}
console.log(count)
