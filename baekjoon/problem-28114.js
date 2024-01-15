let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let ps = []
let ys = []
let ss = []
let array = []
ps.push(Number(input[0].split(' ')[0]))
array.push(Number(input[0].split(' ')[0]))
ys.push(Number(input[0].split(' ')[1]) % 100)
ss.push(input[0].split(' ')[2])
ps.push(Number(input[1].split(' ')[0]))
array.push(Number(input[1].split(' ')[0]))
ys.push(Number(input[1].split(' ')[1]) % 100)
ss.push(input[1].split(' ')[2])
ps.push(Number(input[2].split(' ')[0]))
array.push(Number(input[2].split(' ')[0]))
ys.push(Number(input[2].split(' ')[1]) % 100)
ss.push(input[2].split(' ')[2])
let answer1 = ys.sort(function (a, b) {return a - b}).join('')
array.sort(function (a, b) {return b - a})
let answer2 = ss[ps.indexOf(array[0])].charAt(0) + ss[ps.indexOf(array[1])].charAt(0) + ss[ps.indexOf(array[2])].charAt(0)
console.log(answer1 + '\n' + answer2)
