let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let x = parseInt(input[0].split(' ')[1])
let y = parseInt(input[0].split(' ')[2])
let array = new Array(n)
for (let i = 0; i < n; i++) {
    array[i] = input[i+1].split(' ').map(function (v) { return parseInt(v)})
}
for (let i = 0; i < n; i++) {
    for (let j = 0; j <n; j++) {
        if(i === x-1 || j === y-1) {
            if(array[i][j] > array[x-1][y-1]) {
                return console.log('ANGRY')
            }
        }
    }
}
console.log('HAPPY')