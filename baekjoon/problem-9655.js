let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
getStone(0, 0, false)
function getStone (sang, chang, isSang) {
  if (sang + chang > n) {
    if (isSang) {
      if (sang + chang - n === 2) {
        return console.log('SK')
      }else {
        return console.log('CY')
      }
    }
    if (sang + chang - n === 1) {
      return console.log('SK')
    }else {
      return console.log('CY')
    }
  }
  if (sang + chang === n) {
    if (isSang) {
      return console.log('SK')
    }
    return console.log('CY')
  }
  if (isSang) {
    getStone(sang, chang + 3, false)
  }else {
    getStone(sang + 3, chang, true)
  }
}
