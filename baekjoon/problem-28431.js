let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let socks = []
for (let i = 0; i < 5; i++) {
  let index = socks.indexOf(input[i])
  if (index !== -1) {
    socks.splice(index, 1)
  }else {
    socks.push(input[i])
  }
}
console.log(socks[0])
