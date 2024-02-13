let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let y = Number(input[0])
while(true) {
  y++
  if(isUniqueNumber(y.toString().split(''))) {
    return console.log(y)
  }
}
function isUniqueNumber(num) {
  let array = [false, false, false, false, false, false, false, false, false, false]
  for(let i = 0; i < num.length; i++) {
    if(array[num[i]]) {
      return false
    }
    array[num[i]] = true
  }
  return true
}