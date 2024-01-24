let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0]
let index = 0
let array = ['Paper', 'Printer', 'Planners', 'Binders', 'Calendar', 'Notebooks', 'Ink']
let values = [57.99, 120.50, 31.25, 22.50, 10.95, 11.20, 66.95]
let answer = 0
while(n !== 'EOI') {
  index++
  answer += values[array.indexOf(n)]
  n = input[index]
}
console.log('$' + answer)
