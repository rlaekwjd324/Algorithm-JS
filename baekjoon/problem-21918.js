let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let lights = input[1].split(' ')
for (let i = 0; i < m; i++) {
  let a = input[i + 2].split(' ')[0]
  let l = Number(input[i + 2].split(' ')[1])
  let r = Number(input[i + 2].split(' ')[2])
  switch (a) {
    case '1':
      lights[l - 1] = r.toString()
      break
    case '2':
      for (let j = l; j <= r; j++) {
        if (lights[j - 1] === '1') {
          lights[j - 1] = '0'
        }else {
          lights[j - 1] = '1'
        }
      }
      break
    case '3':
      for (let j = l; j <= r; j++) {
        lights[j - 1] = '0'
      }
      break
    case '4':
      for (let j = l; j <= r; j++) {
        lights[j - 1] = '1'
      }
      break
  }
}
console.log(lights.join(' '))
