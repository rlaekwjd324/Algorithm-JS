let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let array = ['Poblano', 'Mirasol', 'Serrano', 'Cayenne', 'Thai', 'Habanero']
let price = [1500, 6000, 15500, 40000, 75000, 125000]
let value = 0
for (let i = 1; i <= n; i++) {
  value += (price[array.indexOf(input[i])])
}
console.log(value)
