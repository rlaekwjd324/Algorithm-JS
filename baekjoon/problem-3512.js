let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let c = Number(input[0].split(' ')[1])
let bed = 0
let all = 0
let balcony = 0
for (let i = 1; i <= n; i++) {
  let a = Number(input[i].split(' ')[0])
  let t = input[i].split(' ')[1]
  all += a
  if (t === 'bedroom') {
    bed += a
  }
  if (t === 'balcony') {
    balcony += a
  }
}
let price = ((all - balcony) + balcony / 2) * c
console.log(all + '\n' + bed + '\n' + price)
