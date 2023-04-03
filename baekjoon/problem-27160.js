let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let fruits = ['STRAWBERRY', 'BANANA', 'LIME', 'PLUM']
let count = [0, 0, 0, 0]
for (let i = 0; i < n; i++) {
  let fruitName = input[i + 1].split(' ')[0]
  let fruitCount = parseInt(input[i + 1].split(' ')[1])
  switch (fruitName) {
    case fruits[0]:
      count[0] += fruitCount
      break
    case fruits[1]:
      count[1] += fruitCount
      break
    case fruits[2]:
      count[2] += fruitCount
      break
    case fruits[3]:
      count[3] += fruitCount
      break
  }
}
if (count.includes(5)) {
  console.log('YES')
  return
}
console.log('NO')