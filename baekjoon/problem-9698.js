let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let answer = ''
for (let i=1; i<=n; i++) {
    let hour = Number(input[i].split(' ')[0])
    let min = Number(input[i].split(' ')[1])
    min -= 45
    if(min < 0) {
        min += 60
        hour--
    }
    if(hour < 0) {
        hour += 24
    }
    answer += ('Case #' + i + ': ' + hour + ' ' + min + '\n')
}
console.log(answer)
