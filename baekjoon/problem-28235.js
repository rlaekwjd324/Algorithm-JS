let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0]
switch (word) {
  case 'SONGDO':
    console.log('HIGHSCHOOL')
    break
  case 'CODE':
    console.log('MASTER')
    break
  case '2023':
    console.log('0611')
    break
  case 'ALGORITHM':
    console.log('CONTEST')
    break
}
