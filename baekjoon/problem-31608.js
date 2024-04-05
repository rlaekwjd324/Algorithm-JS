let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let word1 = input[1].split('')
let word2 = input[2].split('')
let count = 0
for (let i=0;i<n;i++) {
    if(word1[i] !== word2[i]) {
        count++
    }
}
console.log(count)
