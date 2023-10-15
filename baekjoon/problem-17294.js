let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('').map(function (v) {return parseInt(v)})
if(n.length<=1) {
  return console.log('◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!')
}
let beforeNumber = n[0]
let temp = n[0]-n[1]
for (let i = 1; i <n.length; i++) {
  if(temp !== (beforeNumber-n[i])) {
    return console.log('흥칫뿡!! <(￣ ﹌ ￣)>')
  }
  beforeNumber = n[i]
}
return console.log('◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!')