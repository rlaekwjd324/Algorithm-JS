let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let k = parseInt(input[0].split(' ')[1])
let array = new Array(n)
let visitedArray = new Array(n)
let count = 0
let a = 0
for (let i = 0; i < n; i++) {
    array[i] = parseInt(input[i+1])
    visitedArray[i] = false
}
while (true) {
    if(k === a) {
        console.log(count)
        return
    }
    if(visitedArray[a]) {
        console.log(-1)
        return
    }
    visitedArray[a] = true
    a = array[a]
    count++
}