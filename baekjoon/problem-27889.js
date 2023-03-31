let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]
let input = fs.readFileSync('test.txt').toString().trim().split('\n')[0]
switch (input) {
  case 'NLCS':
    console.log('North London Collegiate School')
    break
  case 'BHA':
    console.log('Branksome Hall Asia')
    break
  case 'KIS':
    console.log('Korea International School')
    break
  case 'SJA':
    console.log('St. Johnsbury Academy')
    break
}
