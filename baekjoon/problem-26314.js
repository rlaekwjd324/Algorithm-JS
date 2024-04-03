let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
let v = ['a', 'e', 'i', 'o', 'u']
let answer = ''
for (let i = 1; i <= n; i++) {
    let name = input[i].split('')
    let vCount = 0
    for (let j = 0; j < name.length; j++) {
        if (v.includes(name[j])) {
            vCount++
        }
    }
    answer += (name.join('') + '\n')
    if (vCount > name.length - vCount) {
        answer += ('1\n')
    } else {
        answer += ('0\n')
    }
}
console.log(answer)