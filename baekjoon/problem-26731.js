let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let alphabet = input[0].split('')
alphabet.sort()
if(alphabet[0] !== 'A') {
  return console.log('A')
}
let preAlphabet = alphabet[0]
for (let i = 1; i < 25; i++) {
  if(preAlphabet.charCodeAt(0)+1 !==alphabet[i].charCodeAt(0)) {
    return console.log(String.fromCharCode(i+65))
  }
  preAlphabet = alphabet[i]
}
console.log('Z')