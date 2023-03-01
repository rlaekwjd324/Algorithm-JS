let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let r = parseInt(input[0].split(' ')[0])
let c = parseInt(input[0].split(' ')[1])
let array = new Array(r)
let isSeaArray = new Array(r)
let answerXIndex = []
let answerYIndex = []
for (let i = 0; i < r; i++) {
    array[i] = input[i + 1].split('')
}
for (let i = 0; i < r; i++) {
    isSeaArray[i] = new Array(c)
    for (let j = 0; j < c; j++) {
        if (array[i][j] === 'X') {
            isSeaArray[i][j] = true
            let tempCount = countSea(i, j)
            if (tempCount === 3 || tempCount === 4) {
                isSeaArray[i][j] = false
            } else {
                answerXIndex.push(i)
                answerYIndex.push(j)
            }
        }
    }
}
answerXIndex.sort()
answerYIndex.sort()
let answer = ''
for (let i = answerXIndex[0]; i <= answerXIndex[answerXIndex.length - 1]; i++) {
    for (let j = answerYIndex[0]; j <= answerYIndex[answerYIndex.length - 1]; j++) {
        answer += (isSeaArray[i][j] ? 'X' : '.')
    }
    answer += '\n'
}
console.log(answer)

function countSea(x, y) {
    let count = 0
    if (x <= 0 || (x > 0 && array[x - 1][y] === '.')) {
        count++
    }
    if (x >= r - 1 || (x < r - 1 && array[x + 1][y]) === '.') {
        count++
    }
    if (y <= 0 || (y > 0 && array[x][y - 1] === '.')) {
        count++
    }
    if (y >= c - 1 || (y < c - 1 && array[x][y + 1] === '.')) {
        count++
    }
    return count
}