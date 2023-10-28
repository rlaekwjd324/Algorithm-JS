let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let games = input[0].split('')
let a = 0
let b = 0
for (let i = 0; i < games.length / 2; i++) {
  if(games[i*2] === 'A') {
    a+= Number(games[i*2+1])
  }else {
    b+= Number(games[i*2+1])
  }
  if(a>b&&a>=11&&a>b+1) {
    return console.log('A')
  }
  if(b>a&&b>=11&&b>a+1) {
    return console.log('B')
  }
}
