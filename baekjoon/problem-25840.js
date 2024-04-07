let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let array = []
for (let i=1; i<=n; i++) {
    if(!array.includes(input[i])) {
        array.push(input[i])
    }
}
console.log(array.length)
