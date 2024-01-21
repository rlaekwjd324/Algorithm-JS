let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = input[0].split(' ')
let ranks = 'A23456789TJQK'.split('')
let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < array.length; i++) {
  let rank = array[i].split('')[0]
  counts[ranks.indexOf(rank)]++
}
counts.sort(function (a, b) {return b - a})
console.log(counts[0])
