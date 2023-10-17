let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = Number(input[0].split(' ')[0])
let b = Number(input[0].split(' ')[1])
let c = Number(input[1].split(' ')[0])
let d = Number(input[1].split(' ')[1])
let arrayA = []
let arrayC = []
for (let i = a; i <=b; i++) {
  if(isSosu(i)) {
    arrayA.push(i)
  }
}
for (let i = c; i <=d; i++) {
  if(isSosu(i)) {
    arrayC.push(i)
  }
}
let isYt = true
for (let i = arrayA.length-1; i >= 0; i--) {
  let tempIndex = arrayC.indexOf(arrayA[i])
  if(tempIndex!==-1) {
    if(isYt) {
      isYt = false
    }else {
      isYt = true
    }
    arrayA.splice(i, 1)
    arrayC.splice(tempIndex, 1)
  }
}
if(arrayA.length > arrayC.length) {
  return console.log('yt')
}
if(arrayA.length === arrayC.length) {
if(!isYt) {
  return console.log('yt')
}
}
console.log('yj')

function isSosu(v) {
  for (let i = 2; i <= Math.sqrt(v); i++) {
    if(v%i ===0) {
      return false
    }
  }
  return true
}