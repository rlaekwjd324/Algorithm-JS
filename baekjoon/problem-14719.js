let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let h = parseInt(input[0].split(' ')[0])
let w = parseInt(input[0].split(' ')[1])
let weight = 0
let heights = input[1].split(' ').map(function (v) {return parseInt(v)})
for (let i = 1; i < w - 1; i++) {
  let preHeight = 0
  let postHeight = 0
  let tempHeight = heights[i]
  for (let j = 0; j < i; j++) {
    preHeight = Math.max(preHeight, heights[j])
  }
  for (let j = i; j < w; j++) {
    postHeight = Math.max(postHeight, heights[j])
  }
  weight += (preHeight > postHeight ? ((postHeight - tempHeight > 0 ? postHeight - tempHeight : 0)) : ((preHeight - tempHeight > 0 ? preHeight - tempHeight : 0)))
}
console.log(weight)
