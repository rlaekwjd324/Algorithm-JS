let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let array = []
for (let i = 0; i < input.length; i++) {
  array.push({name: input[i].split(' ')[0], temp: Number(input[i].split(' ')[1])})
}
array.sort(function (a, b) { return a.temp - b.temp })
console.log(array[0].name)
