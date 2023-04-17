let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split(' ')
switch (n[1]) {
  case 'OR':
    console.log((n[0] === 'true') || (n[2] === 'true'))
    break
  case 'AND':
    console.log((n[0] === 'true') && (n[2] === 'true'))
    break
}
