let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let d = parseInt(input[0].split(' ')[0])
let h = parseInt(input[0].split(' ')[1])
let m = parseInt(input[0].split(' ')[2])
if(m<11) {
    h--
    m += 60
}
m -=11
if(h<11) {
    d--
    h+=24
}
h -= 11
if(d<11) {
    return console.log('-1')
}
d -= 11
console.log(d*24*60+h*60+m)