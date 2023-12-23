let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
for (let i=1; i<=n; i++) {
  if (input[i].split('').indexOf('S') !== -1) {
    return console.log(input[i])
  }
}
