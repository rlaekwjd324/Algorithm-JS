let fs = require('fs')
// let line = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]
let line = fs.readFileSync('test.txt').toString().trim().split('\n')[0]
let sum = parseInt(line.split(' + ')[0]) + parseInt(line.split(' + ')[1].split(' ')[0])
console.log(sum === parseInt(line.split(' = ')[1]) ? 'YES' : 'NO')
