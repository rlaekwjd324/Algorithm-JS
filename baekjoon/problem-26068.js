let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let answer = 0
for (let i = 1; i <= parseInt(input[0]); i++) {
    let day = parseInt(input[i].split('-')[1])
    if (day <= 90) {
        answer++
    }
}
console.log(answer)