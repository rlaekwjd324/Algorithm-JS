let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let array = ['E', 'W', 'S', 'N']
let answer = '' 
for (let i=1; i<=n; i++) {
    let t = Number(input[i*2-1])
    let dir = input[i*2].split('')
    let walk = [0,0,0,0]
    for (let j=0;j<t;j++) {
        walk[array.indexOf(dir[j])]++
    }
    answer += ((Math.abs(walk[0]-walk[1])+Math.abs(walk[2]-walk[3]))+'\n')
}
console.log(answer)
