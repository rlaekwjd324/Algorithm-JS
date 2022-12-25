let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let array = Array.from(Array(100), () => Array(100).fill(0))
for (let i = 1; i <= n; i++) {
    let position = input[i].split(' ').map(function (params) { return parseInt(params) })
    for (let j = position[0] - 1; j < position[2]; j++) {
        for (let w = position[1] - 1; w < position[3]; w++) {
            array[j][w] = array[j][w] + 1
        }
    }
}
let answer = 0;
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (array[i][j] > m) {
            answer = answer + 1
        }
    }
}
console.log(answer)
