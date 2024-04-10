let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = input[0]
let answer = 0
let a = input[1].split(' ')
let b = input[2].split(' ')
for (let i=0; i<n; i++) {
  if(Number(a[i]) > Number(b[i])) {
    answer+=3
  } else if (Number(a[i]) === Number(b[i])) {
    answer++
  } 
}
console.log(answer)
