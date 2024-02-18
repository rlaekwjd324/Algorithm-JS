let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let answer = ''
for (let i=1; i<=n; i++) {
    let count = Number(input[i].split(' ')[0])
    let start = input[i].split(' ')[1].charCodeAt(0)-65
    for (let j=1; j<=count; j++) {
        answer += (String.fromCharCode(start+65)).repeat(j)+'\n'
        start++
        if(start>=26) {
            start -= 26
        }
    }
    answer += '\n'
}
console.log(answer)
