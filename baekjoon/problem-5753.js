let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== '0 0') {
    let n = Number(input[index].split(' ')[0])
    let d = Number(input[index].split(' ')[1])
    let array = []
    for (let i = 0; i < d; i++) {
        index++
        array.push(input[index].split(' '))
    }
    let right = true
    for (let i = 0; i < n; i++) {
        right = true
        for (let j = 0; j < d; j++) {
            if (array[j][i] === '0') {
                right = false
            }
        }
        if (right) {
            answer += 'yes\n'
            break
        }
    }
    index++
    if (!right) {
        answer += 'no\n'
    }
}
console.log(answer)