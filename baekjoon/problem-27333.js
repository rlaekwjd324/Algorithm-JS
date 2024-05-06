let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
// let n = Number(input[0])
let word = input[1]
while (word.indexOf('jj') !== -1) {
    word = word.replace('jj', 'JJ')
}
while (word.indexOf('ii') !== -1) {
    word = word.replace('ii', 'II')
}
while (word.indexOf('oo') !== -1) {
    word = word.replace('oo', 'OO')
}
console.log(word)
