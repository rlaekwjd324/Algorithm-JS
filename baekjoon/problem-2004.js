let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let count2 = 0
let count5 = 0
for (let i = 2; i <= a; i *= 2) {
  count2 += parseInt(a / i)
}
for (let i = 5; i <= a; i *= 5) {
  count5 += parseInt(a / i)
}
for (let i = 2; i <= b; i *= 2) {
  count2 -= parseInt(b / i)
}
for (let i = 5; i <= b; i *= 5) {
  count5 -= parseInt(b / i)
}
for (let i = 2; i <= a - b; i *= 2) {
  count2 -= parseInt((a - b) / i)
}
for (let i = 5; i <= a - b; i *= 5) {
  count5 -= parseInt((a - b) / i)
}
console.log(count2 > count5 ? count5 : count2)
