let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[0].split(' ')[2])
let d = Number(input[0].split(' ')[3])
let e = Number(input[0].split(' ')[4])
let f = Number(input[0].split(' ')[5])
// ax+by = c
// dx+ey = f
// adx + bdy = cd
// adx + aey = af
// bdy-aey = cd-af
// y = (cd-af) / (bd-ae)
// (b*d/a - e)y = c*d/a-f
let y = 0
let x = 0
if (a === 0) {
  y = c / b
  x = (f - e * y) / d
}else if (d === 0) {
  y = f / e
  x = (c - b * y) / a
}else {
  y = (c * d / a - f) / (b * d / a - e)
  x = (c - b * y) / a
}
console.log(x + ' ' + y)
