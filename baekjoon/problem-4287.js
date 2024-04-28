let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let index = 0
let answer = ''
while ( input[index] !== '#' ) {
    let word = input[index].split(' ')
    let array = []
    let str = ''
    for (let i = 0; i < word[0].length; i++) {
        array.push((word[1].charCodeAt(i) - word[0].charCodeAt(i)))
        let temp = word[2].charCodeAt(i)+array[i]
        if(temp < 97) {
            temp += 26
        }else if (temp > 122) {
            temp -= 26
        }
        str += String.fromCharCode(temp)
    }
    answer += (input[index] + ' ' + str + '\n')
    index++
}
console.log(answer)
