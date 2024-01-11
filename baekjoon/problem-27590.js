let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let ds = Number(input[0].split(' ')[0])
let ys = Number(input[0].split(' ')[1])
let dm = Number(input[1].split(' ')[0])
let ym = Number(input[1].split(' ')[1])
let sun = ds
let moon = dm
let count = 0
while(true) {
  sun++
  moon++
  count++
  if(sun%ys === 0 && moon%ym === 0) {
    return console.log(count)
  }
}