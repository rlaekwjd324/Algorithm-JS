let fs = require('fs')
// let word = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(' ')
let word = fs.readFileSync('test.txt').toString().trim().split('\n')[0].split(' ')
let array = []
for (let i = 0; i < word.length; i++) {
    if(array.includes(word[i])){
        console.log('no')
        return
    }
    array.push(word[i])
}
console.log('yes')