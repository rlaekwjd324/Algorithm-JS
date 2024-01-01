let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let k = input[0].split(' ')[1]
switch(k) {
  case 'miss':
    return console.log(0)
  case 'bad':
    return console.log(n*200)
  case 'cool':
    return console.log(n*400)
  case 'great':
    return console.log(n*600)
  case 'perfect':
    return console.log(n*1000)

}