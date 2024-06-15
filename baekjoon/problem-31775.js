let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let l = false
let k = false
let p = false
for (let i=0; i<3; i++) {
  let w = input[i].split('')[0]
  if (w === 'l') {
    l = true
  } else if (w === 'k') {
    k = true
  } else if (w === 'p') {
    p = true
  }
}
if (l && k && p) {
  return console.log('GLOBAL')
}
console.log('PONIX')
