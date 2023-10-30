let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let m = Number(input[0].split(' ')[1])
let array = []
for (let i = 1; i <= n; i++) {
  array.push(i)
}
let count = 0
for (let i = 0; i < m; i++) {
  let temp = Number(input[1].split(' ')[i])
  let tempIndex = array.indexOf(temp)
  if (tempIndex === 0) {
    array.splice(0, 1)
    continue
  }
  if (tempIndex > array.length - tempIndex) {
    for (let j = 0; j < array.length - tempIndex; j++) {
      array.unshift(array[array.length - 1])
      array.splice(array.length - 1, 1)
      count++
    }
  }else if (tempIndex < array.length - tempIndex) {
    for (let j = 0; j < tempIndex; j++) {
      let t = array.shift(array[array.length - 1])
      array.push(t)
      count++
    }
  }else {
    if (i < m - 1 && array.indexOf(Number(input[1].split(' ')[i + 1])) > array.length - array.indexOf(Number(input[1].split(' ')[i + 1]))) {
      for (let j = 0; j < array.length - tempIndex; j++) {
        array.unshift(array[array.length - 1])
        array.splice(array.length - 1, 1)
        count++
      }
    }else {
      for (let j = 0; j < tempIndex; j++) {
        let t = array.shift(array[array.length - 1])
        array.push(t)
        count++
      }
    }
  }
  array.splice(0, 1)
}
console.log(count)
