let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let array = ['Yakk', 'Doh', 'Seh', 'Ghar', 'Bang', 'Sheesh']
let sames = ['Habb Yakk', 'Dobara', 'Dousa', 'Dorgy', 'Dabash', 'Dosh']
let answer = ''
for (let i = 1; i <= t; i++) {
  let a = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])
  if (a < b) {
    let temp = a
    a = b
    b = temp
  }
  answer += ('Case ' + i + ': ')
  if (a === b) {
    answer += (sames[a - 1] + '\n')
    continue
  }
  if (a === 6 && b === 5) {
    answer += 'Sheesh Beesh\n'
    continue
  }
  answer += (array[a - 1] + ' ' + array[b - 1] + '\n')
}
console.log(answer)
