const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = []
rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let n = parseInt(input[0])
  let players = new Array(n)
  let fixPlayers = new Array(n)
  for (let i = 1; i <= n; i++) {
    players[i - 1] = input[i]
    fixPlayers[i - 1] = input[i]
  }
  players.sort()
  if (players.join(' ') === fixPlayers.join(' ')) {
    console.log('INCREASING')
    return
  }
  let decreasedPlayers = players.reverse()
  if (decreasedPlayers.join(' ') === fixPlayers.join(' ')) {
    console.log('DECREASING')
    return
  }
  console.log('NEITHER')
  process.exit()
})
