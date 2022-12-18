let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let str = input[0].split('.')
let answer = ''
for (let i = 0; i < str.length; i++) {
    if (str[i].length % 2 === 1) {
        console.log('-1')
        return
    }
    for (let j = 0; j < parseInt(str[i].length / 4); j++) {
        answer += 'AAAA'
    }
    if (str[i].length % 4 === 2) {
        answer += 'BB'
    }
    answer += '.'
}
console.log(answer.substring(0, answer.length - 1))
