let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let titles = []
let songs = []
let answer = ''
for (let i = 1; i <= n; i++) {
  titles.push(input[i].split(' ')[1])
  let song = ''
  for (let j = 0; j < 3; j++) {
    song += input[i].split(' ')[j + 2]
  }
  if (songs.includes(song)) {
    titles[songs.indexOf(song)] = '?'
    titles[i - 1] = '?'
  }
  songs.push(song)
}
for (let i = 0; i < m; i++) {
  let index = songs.indexOf(input[n + i + 1].split(' ').join(''))
  if (index === -1) {
    answer += ('!\n')
  }else {
    answer += (titles[index] + '\n')
  }
}
console.log(answer)
