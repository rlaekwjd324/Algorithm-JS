let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let k = Number(input[0]) + 1
let number = ''
let n = 0
while (k > 0) {
  n++
  let temp = parseInt(k / 2)
  let leftNumber = k % 2
  k = temp
  number = (leftNumber === 0 ? '4' : '7') + number
}
console.log(number.substring(1))

// 4 7 
// 44 47 74 77 
// 444 447 474 477 744 747 774 777 
// 1
// 10 11
// 100 101 110 111
// 1000 1001 1010 1011 1100 1101 1110 1111

// 10 -> 5, 0 -> 2, 1 -> 1, 0 -> 0, 1
