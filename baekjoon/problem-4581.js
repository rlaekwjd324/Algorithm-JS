let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let index = 0
let answer = ''
while ( input[index] !== '#' ) {
    let voting = input[index].split('')
    let array = ['Y', 'N', 'P', 'A']
    let count = [0,0,0,0]
    for (let i = 0; i < voting.length; i++) {
        count[array.indexOf(voting[i])]++
    }
    if(count[3] >= voting.length/2) {
        answer+='need quorum\n'
    }else if (count[0] > count[1]) {
        answer+='yes\n'
    }else if (count[0] < count[1]) {
        answer+='no\n'
    }else {
        answer+='tie\n'
    }
    index++
}
console.log(answer)
