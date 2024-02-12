let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let word = input[0].split('')
let answer = ''
let vCount = 0
let yCount = 0
for (let i = 0; i < word.length; i++) {
    if(word[i] === 'y') {
        yCount++
        continue
    }
    if('aeiou'.indexOf(word[i]) !== -1) {
        vCount++
    }
}
console.log(vCount+' '+ (vCount + yCount))
