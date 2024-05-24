let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '0 0') {
  let n = input[index].split(' ')[0].split('')
  let m = input[index].split(' ')[1].split('')
  if (n > m) {
    let temp = n
    n = m
    m = temp
  }
  let count = 0
  let pre = 0
  for (let i = 0; i < n.length; i++) {
    if (pre + Number(n[n.length - i - 1]) + Number(m[m.length - i - 1]) >= 10) {
      pre = 1
      count++
    }else {
      pre = 0
    }
  }
  for (let i = 0; i < m.length - n.length; i++) {
    if (pre + Number(m[m.length - n.length - i - 1]) >= 10) {
      pre = 1
      count++
    }else {
      pre = 0
      break
    }
  }
  answer += (count + '\n')
  index++
}
console.log(answer)
