let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let word = input[0].split('')
let answer = ''
let array = ['B', 'C', 'D', 'F']
if (word.includes('A')) {
  for (let i = 0; i < word.length; i++) {
    if (array.includes(word[i])) {
      answer += 'A'
    }else {
      answer += word[i]
    }
  }
}else if (word.includes('B')) {
  array.shift()
  for (let i = 0; i < word.length; i++) {
    if (array.includes(word[i])) {
      answer += 'B'
    }else {
      answer += word[i]
    }
  }
}else if (word.includes('C')) {
  array.shift()
  for (let i = 0; i < word.length; i++) {
    if (array.includes(word[i])) {
      answer += 'C'
    }else {
      answer += word[i]
    }
  }
}else {
  answer += ('A'.repeat(word.length))
}
console.log(answer)
