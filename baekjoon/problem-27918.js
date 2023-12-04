let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let dalguCount = 0
let phanixCount = 0
for (let i = 1; i <= n; i++) {
  switch (input[i]) {
    case 'D':
      dalguCount++
      break
    case 'P':
      phanixCount++
      break
  }
  if (Math.abs(dalguCount - phanixCount) >= 2) {
    break
  }
}
console.log(dalguCount + ':' + phanixCount)
