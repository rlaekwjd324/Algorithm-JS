let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0]
let array = new Array(n)
for (let i = 0; i < n; i++) {
  let tempIndex = input[i + 1].split(' ')[0].charCodeAt() - 65
  array[tempIndex] = input[i + 1].split(' ')
  array[tempIndex].shift()
}
let answer = ''
let visited = new Array(n)
for (let i = 0; i < n; i++) {
  visited[i] = false
}
let line = ''
preCycle(0)
answer += (line + '\n')
line = 'A'
for (let i = 0; i < n; i++) {
  visited[i] = false
}
middleCycle(0, 'A')
answer += (line + '\n')
line = ''
for (let i = 0; i < n; i++) {
  visited[i] = false
}
postCycle(0)
answer += (line + '\n')
console.log(answer)
function preCycle (index) {
  if (index < 0) {
    return
  }
  if (visited[index]) {
    return
  }
  visited[index] = true
  line += String.fromCharCode(65 + index)
  let newIndex = array[index][0].charCodeAt(0) - 65
  preCycle(newIndex)
  newIndex = array[index][1].charCodeAt(0) - 65
  preCycle(newIndex)
}
function middleCycle (index, preAlphabet) {
  visited[index] = true
  let newIndex = array[index][0].charCodeAt(0) - 65
  if (array[index][0] !== '.' && !visited[newIndex]) {
    let preIndex = line.indexOf(preAlphabet)
    line = line.substring(0, preIndex) + String.fromCharCode(65 + newIndex) + line.substring(preIndex, line.length)
    middleCycle(newIndex, String.fromCharCode(65 + newIndex))
  }
  newIndex = array[index][1].charCodeAt(0) - 65
  if (array[index][1] !== '.' && !visited[newIndex]) {
    let preIndex = line.indexOf(preAlphabet)
    line = line.substring(0, preIndex + 1) + String.fromCharCode(65 + newIndex) + line.substring(preIndex + 1, line.length)
    middleCycle(newIndex, String.fromCharCode(65 + newIndex))
  }
}
function postCycle (index) {
  if (index < 0) {
    return
  }
  if (visited[index]) {
    return
  }
  visited[index] = true
  line = String.fromCharCode(65 + index) + line
  let newIndex = array[index][1].charCodeAt(0) - 65
  postCycle(newIndex)
  newIndex = array[index][0].charCodeAt(0) - 65
  postCycle(newIndex)
}
