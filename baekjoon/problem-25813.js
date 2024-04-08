let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = input[0].split('')
let answer = ''
let uIndex = n.indexOf('U')
answer = '-'.repeat(uIndex) + 'U'
let count =0
for (let i=n.length-1; i>uIndex; i—-) {
  if(n[i] === 'F') {
    answer += ('C'.repeat(i-uIndex-1)+ 'F'+ '-'.repeat(count))
    break
  }
  count++
}
console.log(answer)
