let fs = require('fs')
// let line = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let line = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = 0
for (let i = 0; i < line.length; i++) {
  let type = line[i].split(' ')[0]
  let count = parseInt(line[i].split(' ')[1])
  if (type === 'Es') {
    answer += (count * 21)
  }else {
    answer += (count * 17)
  }
}
console.log(answer)
