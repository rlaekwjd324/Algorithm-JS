let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let k = parseInt(input[0].split(' ')[1])
let a = parseInt(input[0].split(' ')[2])
let b = parseInt(input[0].split(' ')[3])
let array = new Array(n)
for (let i = 0; i < n; i++){
  array[i] = k
}
let day = 0
let index = 0
while(true) {
  if(array.indexOf(0) !== -1) {
    console.log(day)
    return
  }
  day++
  index = (index + a) % n
  for(let i = 0; i < a; i++) {
    if(index + i > n - 1) {
      array[index - i] += b
    } else {
      array[index + i] += b
    }
  }
  for(let i = 0; i < n; i++){
    array[i]--
  }
}