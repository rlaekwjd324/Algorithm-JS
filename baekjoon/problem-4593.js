let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let answer = ''
while (input[index] !== 'E' || input[index + 1] !== 'E') {
    let p1 = input[index].split('')
    index++
    let p2 = input[index].split('')
    index++
    let p1Count = 0
    let p2Count = 0
    for (let i = 0; i < p1.length; i++) {
        switch (p1[i]) {
            case 'R':
                if (p2[i] === 'S') {
                    p1Count++
                } else if (p2[i] === 'P') {
                    p2Count++
                }
                break
            case 'S':
                if (p2[i] === 'P') {
                    p1Count++
                } else if (p2[i] === 'R') {
                    p2Count++
                }
                break
            case 'P':
                if (p2[i] === 'R') {
                    p1Count++
                } else if (p2[i] === 'S') {
                    p2Count++
                }
                break
        }
    }
    answer += ('P1: ' + p1Count + '\n')
    answer += ('P2: ' + p2Count + '\n')
}
console.log(answer)