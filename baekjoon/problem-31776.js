let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let count = 0
for (let i=1; i<=n; i++) {
  let p = input[i].split(' ')
  let isTeam = true
  let pre = Number(p[0])
  for (let j=1; j<3; j++) {
    if (pre === -1 && Number(p[j]) !== -1) {
      isTeam = false
      break
    }
    if (pre > Number(p[j]) && Number(p[j]) !== -1) {
      isTeam = false
      break
    }
    pre = Number(p[j])
  }
  if (Number(p[0]) !== -1 && isTeam) {
    count++
  }
}
console.log(count)
