let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let str = input[0].split(' ')
let trashWords = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili']
let answer = str[0].substring(0, 1).toUpperCase()
for (let i = 1; i < str.length; i++) {
    if (trashWords.includes(str[i])) {
        continue
    }
    answer += (str[i].substring(0, 1).toUpperCase())
}
console.log(answer)
