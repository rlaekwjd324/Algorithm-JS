let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let a = input[1].split(' ')[0].split('')
let b = input[1].split(' ')[1].split('')
let count = [3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]
let newWord = []
if (a.length > b.length) {
  for (let i = 0; i < b.length; i++) {
    newWord += a[i]
    newWord += b[i]
  }
  newWord += (a.slice(b.length, a.length).join(''))
}else {
  for (let i = 0; i < a.length; i++) {
    newWord += a[i]
    newWord += b[i]
  }
  newWord += (b.slice(a.length, b.length).join(''))
}
let newArray = new Array(a.length + b.length)
for (let i = 0; i < a.length + b.length; i++) {
  let index = newWord.split('')[i].charCodeAt(0) - 65
  newArray[i] = count[index]
}
for (let i = 0; i < a.length + b.length - 2; i++) {
  for (let j = 0; j < newArray.length - 1; j++) {
    newArray[j] = (newArray[j] + newArray[j + 1]) % 10
  }
  newArray.pop()
}
console.log(Number(newArray[0] + '' + newArray[1]) + '%')
