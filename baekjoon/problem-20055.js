let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let k = parseInt(input[0].split(' ')[1])
let a = input[1].split(' ').map(function (params) { return parseInt(params) })
let answer = 0
let existRobot = new Array(n)
while (true) {
    let zeroCount = 0
    for (let i = 0; i < 2 * n; i++) {
        if (a[i] === 0) { zeroCount++ }
    }
    if (zeroCount >= k) {
        console.log(answer)
        return
    }
    answer++
    let temp = a[2 * n - 1]
    for (let i = 2 * n - 1; i > 0; i--) {
        a[i] = a[i - 1]
        if (i < n - 1) {
            existRobot[i] = existRobot[i - 1]
        }
    }
    a[0] = temp
    existRobot[0] = false
    for (let i = n - 2; i > 0; i--) {
        // 로봇 있는지 검사하고 옮길 수 있으면 옮기기
        if (existRobot[i] && !existRobot[i + 1] && a[i + 1] >= 1) {
            existRobot[i + 1] = true
            existRobot[i] = false
            a[i + 1]--
        }
    }
    // 로봇 올리기
    if (a[0] >= 1) {
        existRobot[0] = true
        a[0]--
    }
    existRobot[n - 1] = false
}