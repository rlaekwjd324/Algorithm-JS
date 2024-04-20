let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
    let n = Number(input[i * 2 - 1])
    let garden = input[i * 2].split(' ').map(function(v) { return Number(v)})
    for (let j = 1; j < n - 1; j++) {
        let temp = (garden[j - 1] + garden[j + 1]) / 2
        if(temp < garden[j]) {
            garden[j] = temp
        }
    }
    answer += ('Case #' + i + ': ' + garden[n - 2].toFixed(6) + '\n')
}
console.log(answer)
