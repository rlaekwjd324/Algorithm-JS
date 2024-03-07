let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = []
let jinjuPrice = 0
for (let i = 1; i <= n; i++) {
  let r = input[i].split(' ')[0]
  let p = Number(input[i].split(' ')[1])
  if (r === 'jinju') {
    jinjuPrice = p
  }
  array.push(p)
}
array.sort(function (a, b) { return b - a})
console.log(jinjuPrice + '\n' + array.indexOf(jinjuPrice))
