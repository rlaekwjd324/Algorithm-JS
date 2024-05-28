let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let height = Number(input[i].split(' ')[0])
  let weight = Number(input[i].split(' ')[1])
  let bmi = weight / (height / 100 * height / 100)
  if (height < 140.1) {
    answer += ('6\n')
    continue
  }
  if (height < 146) {
    answer += ('5\n')
    continue
  }
  if (height < 159) {
    answer += ('4\n')
    continue
  }
  if (height < 161) {
    if (bmi < 35 && bmi >= 16) {
      answer += ('3\n')
    }else {
      answer += ('4\n')
    }
    continue
  }
  if (height < 204) {
    if (bmi < 25 && bmi >= 20) {
      answer += ('1\n')
    }else if (bmi < 20 && bmi >= 18.5) {
      answer += ('2\n')
    } else if (bmi < 30 && bmi >= 25) {
      answer += ('2\n')
    } else if (bmi < 18.5 && bmi >= 16) {
      answer += ('3\n')
    } else if (bmi < 35 && bmi >= 30) {
      answer += ('3\n')
    }else {
      answer += ('4\n')
    }
    continue
  }
  answer += ('4\n')
}
console.log(answer)
