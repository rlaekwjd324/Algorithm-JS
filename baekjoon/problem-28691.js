let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
switch(input[0]) {
  case 'M':
    return console.log('MatKor')
  case 'W':
    return console.log('WiCys')
  case 'C':
    return console.log('CyKor')
  case 'A':
    return console.log('AlKor')
  case '$':
    return console.log('$clear')
}