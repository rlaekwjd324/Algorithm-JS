let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
    let players = input[i].split(' ')
    answer += input[i]
    if (players.includes('17') && players.includes('18')) {
        answer += '\nboth\n\n'
        continue
    }
    if (players.includes('17')) {
        answer += '\nzack\n\n'
        continue
    }
    if (players.includes('18')) {
        answer += '\nmack\n\n'
        continue
    }
    answer += '\nnone\n\n'
}
console.log(answer)