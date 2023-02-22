let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('')
let array = ['2', '0', '1', '8']
for (let i = 0; i < n.length; i++) {
    if (!array.includes(n[i])) {
        console.log(0)
        return
    }
}
if (n.includes('2') && n.includes('0') && n.includes('1') && n.includes('8')) {
    let temp = [0, 0, 0, 0]
    for (let i = 0; i < n.length; i++) {
        temp[array.indexOf(n[i])]++
    }
    if (temp[0] === temp[1] && temp[1] === temp[2] && temp[2] === temp[3]) {
        console.log(8)
    } else {
        console.log(2)
    }
    return
}
if (n.includes('2') || n.includes('0') || n.includes('1') || n.includes('8')) {
    console.log(1)
    return
}