let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let array = []
for (let i = 1; i <= n; i++) {
  array.push(input[i].split(''))
}
for (let i = 0; i < m; i++) {
  let escape = true
  for (let j = 0; j < n; j++) {
    if(array[j][i] === 'O') {
      escape = false
      break
    }
  }
  if (escape) {
    return console.log((i+1))
  }
}
console.log('ESCAPE FAILED')