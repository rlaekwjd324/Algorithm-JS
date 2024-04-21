let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
    let year = Number(input[i].split(' ')[0])
    let month = Number(input[i].split(' ')[1])
    let date = Number(input[i].split(' ')[2])
    if (2007-year >18) {
        answer += ('Yes\n')
        continue
    }
    if(2007-year < 18) {
        answer += ('No\n')
        continue
    }
    if ( month < 2) {
        answer += ('Yes\n')
        continue
    }
    if ( month > 2) {
        answer += ('No\n')
        continue
    }
    if ( date <= 27) {
        answer += ('Yes\n')
        continue
    }
    answer += ('No\n')
}
console.log(answer)
