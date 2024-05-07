let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let m = input[0]
let n = Number(input[1])
let count = 1
for (let i = 0; i < n; i++) {
    let z1 = input[i + 2].split(' ')[0]
    let z2 = input[i + 2].split(' ')[1]
    if (m === z2) {
        m = z1
        count++
    }
}
console.log(m + '\n' + count)