let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let socks = input[0].split('')
let counts = [0, 0]
for (let i = 0; i < socks.length; i++) {
  if (socks[i] === 'B') {
    counts[0]++
  }else {
    counts[1]++
  }
}
console.log((parseInt(counts[0] / 2) + parseInt(counts[1] / 2)))
