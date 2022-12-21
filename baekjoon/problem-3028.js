let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let actions = input[0].split('')
let nowBallPosition = 1
for (let i = 0; i < actions.length; i++) {
    switch (actions[i]) {
        case 'A':
            if (nowBallPosition === 1) {
                nowBallPosition = 2
            } else if (nowBallPosition === 2) {
                nowBallPosition = 1
            }
            break
        case 'B':
            if (nowBallPosition === 2) {
                nowBallPosition = 3
            } else if (nowBallPosition === 3) {
                nowBallPosition = 2
            }
            break
        case 'C':
            if (nowBallPosition === 1) {
                nowBallPosition = 3
            } else if (nowBallPosition === 3) {
                nowBallPosition = 1
            }
            break
    }
}
console.log(nowBallPosition)
