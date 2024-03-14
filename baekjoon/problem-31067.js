let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let tracks = input[1].split(' ').map(function (track) {return Number(track)})
let pre = tracks[0]
let count = 0
for (let i = 1; i < n; i++) {
  if (pre < tracks[i]) {
    pre = tracks[i]
    continue
  }
  count++
  tracks[i] += k
  if(pre>=tracks[i]) {
    
    return console.log(-1)
  }
  pre = tracks[i]
}
console.log(count)