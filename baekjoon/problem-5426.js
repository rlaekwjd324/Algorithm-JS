let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
    let word = input[i]
    let lineLength = Math.sqrt(word.length)
    let array = new Array(lineLength)
    let key = ''
    for (let j = 0; j < lineLength; j++) {
        array[j] = word.substr(j * lineLength, lineLength)
    }
    for (let j = lineLength - 1; j >= 0; j--) {
        for (let w = 0; w < lineLength; w++) {
            key += array[w][j]
        }
    }
    answer += (key + '\n')
}
console.log(answer)