let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let p = parseInt(input[0].split(' ')[1])
let w = parseInt(input[1].split(' ')[0])
let l = parseInt(input[1].split(' ')[1])
let g = parseInt(input[1].split(' ')[2])
let winnerPlayers = []
let loserPlayers = []
let index = 1
let score = 0
for (let i = 0; i < p; i++) {
  index++
  if (input[index].split(' ')[1] === 'W') {
    winnerPlayers.push(input[index].split(' ')[0])
  }else {
    loserPlayers.push(input[index].split(' ')[0])
  }
}
for (let i = 0; i < n; i++) {
  index++
  let player = input[index]
  if (winnerPlayers.includes(player)) {
    score += w
    if(score >= g) {
        return console.log('I AM NOT IRONMAN!!')
    }
  }else {
    score = score - l > 0 ? score - l : 0
  }
}
console.log('I AM IRONMAN!!')