let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0]
switch(word) {
    case 'fdsajkl;':
    case 'jkl;fdsa':
        return console.log('in-out')
    case 'asdf;lkj':
    case ';lkjasdf':
        return console.log('out-in')
    case 'asdfjkl;':
        return console.log('stairs')
    case ';lkjfdsa':
        return console.log('reverse')
}
console.log('molu')