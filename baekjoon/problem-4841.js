let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let answer = ''
for (let i = 1; i <= n; i++) {
    let num = input[i].split('')
    let pre = num[0]
    let count = 1
    for (let j = 1; j < num.length; j++) {
        if(pre === num[j]) {
            count++
        }else {
            answer += (String(count) + String(pre))
            pre = num[j]
            count = 1
        }
    }
    answer += (String(count) + String(pre) + '\n')
}
console.log(answer)
