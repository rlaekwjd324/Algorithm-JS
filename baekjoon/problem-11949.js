let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let line = new Array(n)
for (let i = 1; i <= n; i++) {
  line[i - 1] = parseInt(input[i])
}
for (let i = 0; i < m; i++) {
  for (let j = 0;j < n - 1;j++) {
    if (line[j] % (i + 1) > line[j + 1] % (i + 1)) {
      let temp = line[j]
      line[j] = line[j + 1]
      line[j + 1] = temp
    }
  }
}
console.log(line.join('\n'))
