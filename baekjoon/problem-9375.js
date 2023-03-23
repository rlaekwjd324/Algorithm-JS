let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let index = 0
let t = parseInt(input[index++])
let answer = ''
for (let i = 0; i < t; i++) {
  let clothesTypes = []
  let clothesCounts = []
  let n = parseInt(input[index++])
  for (let j = 0; j < n; j++) {
    let clothesName = input[index].split(' ')[0]
    let clothesType = input[index].split(' ')[1]
    let clothesTypesIndex = clothesTypes.indexOf(clothesType)
    if (clothesTypesIndex !== -1) {
      clothesCounts[clothesTypesIndex]++
    }else {
      clothesTypes.push(clothesType)
      clothesCounts.push(1)
    }
    index++
  }
  let multiple = 1
  for (var j = 0; j < clothesCounts.length;j++) {
    multiple *= (clothesCounts[j] + 1)
  }
  answer += ((multiple - 1) + '\n')
}
console.log(answer)
