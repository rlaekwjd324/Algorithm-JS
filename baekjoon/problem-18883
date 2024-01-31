let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let answer = ''
let index = 0
for (let i=0; i<a; i++) {
  for(let j=0; j<b; j++) {
    index++
    answer+=(index)
    if(j!==b-1)
        answer+=(' ')
  }
  answer+= '\n'
}
console.log(answer)
