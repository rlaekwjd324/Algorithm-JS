let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let king = input[0].split(' ')[0].split('')
king[1] = Number(king[1])
let doll = input[0].split(' ')[1].split('')
doll[1] = Number(doll[1])
let n = Number(input[0].split(' ')[2])
for (let i = 0; i < n; i++) {
  let tempArray = getMove(doll, king, input[i + 1])
  king = tempArray[0]
  doll = tempArray[1]
}
console.log(king.join('') + '\n' + doll.join(''))

function getMove (dollPosition, kingPosition, moving) {
  let tempKingPosition = [kingPosition[0], kingPosition[1]]
  let tempDollPosition = [dollPosition[0], dollPosition[1]]
  switch (moving) {
    case 'R':
      tempKingPosition[0] = String.fromCharCode(tempKingPosition[0].charCodeAt(0) + 1)
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[0] = String.fromCharCode(tempDollPosition[0].charCodeAt(0) + 1)
      }
      break
    case 'L':
      tempKingPosition[0] = String.fromCharCode(tempKingPosition[0].charCodeAt(0) - 1)
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[0] = String.fromCharCode(tempDollPosition[0].charCodeAt(0) - 1)
      }
      break
    case 'B':
      tempKingPosition[1]--
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[1]--
      }
      break
    case 'T':
      tempKingPosition[1]++
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[1]++
      }
      break
    case 'RT':
      tempKingPosition[1]++
      tempKingPosition[0] = String.fromCharCode(tempKingPosition[0].charCodeAt(0) + 1)
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[1]++
        tempDollPosition[0] = String.fromCharCode(tempDollPosition[0].charCodeAt(0) + 1)
      }
      break
    case 'LT':
      tempKingPosition[1]++
      tempKingPosition[0] = String.fromCharCode(tempKingPosition[0].charCodeAt(0) - 1)
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[1]++
        tempDollPosition[0] = String.fromCharCode(tempDollPosition[0].charCodeAt(0) - 1)
      }
      break
    case 'RB':
      tempKingPosition[1]--
      tempKingPosition[0] = String.fromCharCode(tempKingPosition[0].charCodeAt(0) + 1)
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[1]--
        tempDollPosition[0] = String.fromCharCode(tempDollPosition[0].charCodeAt(0) + 1)
      }
      break
    case 'LB':
      tempKingPosition[1]--
      tempKingPosition[0] = String.fromCharCode(tempKingPosition[0].charCodeAt(0) - 1)
      if (tempDollPosition[0] === tempKingPosition[0] && tempDollPosition[1] === tempKingPosition[1]) {
        tempDollPosition[1]--
        tempDollPosition[0] = String.fromCharCode(tempDollPosition[0].charCodeAt(0) - 1)
      }
      break
  }
  if (tempKingPosition[1] < 1 || tempKingPosition[1] > 8 || tempDollPosition[1] < 1 || tempDollPosition[1] > 8
    || tempKingPosition[0].charCodeAt(0) < 65 || tempKingPosition[0].charCodeAt(0) > 72 || tempDollPosition[0].charCodeAt(0) < 65 || tempDollPosition[0].charCodeAt(0) > 72) {
    return [kingPosition, dollPosition]
  }
  return [tempKingPosition, tempDollPosition]
}
