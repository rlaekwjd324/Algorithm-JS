let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let cs = [Number(input[0].split(' ')[0]), Number(input[1].split(' ')[0]), Number(input[2].split(' ')[0])]
let ds = [Number(input[0].split(' ')[1]), Number(input[1].split(' ')[1]), Number(input[2].split(' ')[1])]
let h = Number(input[3])
h -= ds[0]
h -= ds[1]
h -= ds[2]
let count = 0
while (h > 0) {
  count++
  for (let i = 0; i < 3; i++) {
    if (count % cs[i] === 0) {
      h -= ds[i]
    }
  }
}
console.log(count)
