let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(n)
for (let i = 1; i <= n; i++) {
    let numbers = input[i].split(' ').map(function (v) {
        return parseInt(v)
    })
    array[i - 1] = numbers
}
while (n > 1) {
    n = parseInt(n / 2)
    let tempArray = new Array(n)
    for (let i = 0; i < n; i++) {
        tempArray[i] = new Array(n)
        for (let j = 0; j < n; j++) {
            let square = [array[i * 2][j * 2], array[i * 2 + 1][j * 2], array[i * 2][j * 2 + 1], array[i * 2 + 1][j * 2 + 1]].sort(function (a, b) {
                return a - b
            })
            tempArray[i][j] = square[2]
        }
    }
    array = tempArray
}
console.log(array[0][0])