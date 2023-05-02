let fs = require('fs')
// let line = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split('')
let line = fs.readFileSync('test.txt').toString().trim().split('\n')[0].split('')
let alphabetCounts = new Array(26)
for (let i = 0; i < 26; i++) {
  alphabetCounts[i] = 0
}
for (let i = 0; i < line.length;i++) {
  let alphabet = line[i].charCodeAt(0)
  if (alphabet >= 65 && alphabet <= 90) {
    alphabetCounts[alphabet - 65]++
  }else if (alphabet >= 97 && alphabet <= 122) {
    alphabetCounts[alphabet - 97]++
  }
}
let answer = ''
for (let i = 0; i < 26; i++) {
  answer += (String.fromCharCode(65 + i) + ' | ' + '*'.repeat(alphabetCounts[i]) + '\n')
}
console.log(answer)
