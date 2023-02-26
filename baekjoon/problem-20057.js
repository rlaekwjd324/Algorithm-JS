let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0])
let array = new Array(n)
for (let i = 1; i <= n; i++) {
  array[i - 1] = input[i].split(' ').map(function (v) { return parseInt(v)})
}
let r = parseInt(n / 2)
let c = parseInt(n / 2)
// visitCount의 숫자가 두 번씩 동일하게 반복되는데 그 두번째를 알아차려 1 증가할 때를 알아차림
let indexCount = 1
// 방향을 바꾸기 전 이동할 수 있는 숫자
let visitCount = 1
// 1씩 증가하는 visitCount를 할당 받아 1씩 감소하고 0이 될 때 토네이도가 방향을 바꿀 때를 알아차림
let index = visitCount
// 범위 밖으로 날라간 모래의 양
let sand = 0
while(true) {
  if (r === 0 && c === 0) {
    break
  }
  if (visitCount % 2 === 1 && indexCount === 1) {
    // 좌
    if (c - 1 >= 0 && array[r][c - 1] > 0) {
      let sum = parseInt(array[r][c - 1] * 0.01) * 2 + parseInt(array[r][c - 1] * 0.07) * 2 + parseInt(array[r][c - 1] * 0.02) * 2 + parseInt(array[r][c - 1] * 0.1) * 2 + parseInt(array[r][c - 1] * 0.05)
      if (r - 1 >= 0) {
        array[r - 1][c] += parseInt(array[r][c - 1] * 0.01)
      }else {
        sand += parseInt(array[r][c - 1] * 0.01)
      }
      if (r + 1 < n) {
        array[r + 1][c] += parseInt(array[r][c - 1] * 0.01)
      }else {
        sand += parseInt(array[r][c - 1] * 0.01)
      }
      if (r - 1 >= 0 && c - 1 >= 0) {
        array[r - 1][c - 1] += parseInt(array[r][c - 1] * 0.07)
      }else {
        sand += parseInt(array[r][c - 1] * 0.07)
      }
      if (r + 1 < n && c - 1 >= 0) {
        array[r + 1][c - 1] += parseInt(array[r][c - 1] * 0.07)
      }else {
        sand += parseInt(array[r][c - 1] * 0.07)
      }
      if (r - 2 >= 0 && c - 1 >= 0) {
        array[r - 2][c - 1] += parseInt(array[r][c - 1] * 0.02)
      }else {
        sand += parseInt(array[r][c - 1] * 0.02)
      }
      if (r + 2 < n && c - 1 >= 0) {
        array[r + 2][c - 1] += parseInt(array[r][c - 1] * 0.02)
      }else {
        sand += parseInt(array[r][c - 1] * 0.02)
      }
      if (r - 1 >= 0 && c - 2 >= 0) {
        array[r - 1][c - 2] += parseInt(array[r][c - 1] * 0.1)
      }else {
        sand += parseInt(array[r][c - 1] * 0.1)
      }
      if (r + 1 < n && c - 2 >= 0) {
        array[r + 1][c - 2] += parseInt(array[r][c - 1] * 0.1)
      }else {
        sand += parseInt(array[r][c - 1] * 0.1)
      }
      if (c - 3 >= 0) {
        array[r][c - 3] += parseInt(array[r][c - 1] * 0.05)
      }else {
        sand += parseInt(array[r][c - 1] * 0.05)
      }
      if (c - 2 >= 0) {
        array[r][c - 2] += (parseInt(array[r][c - 1]) - sum)
      }else {
        sand += (parseInt(array[r][c - 1]) - sum)
      }
    }
    c--
  } else if (visitCount % 2 === 1 && indexCount === -1) {
    // 하
    if (r + 1 < n && array[r + 1][c] > 0) {
      let sum = parseInt(array[r + 1][c] * 0.01) * 2 + parseInt(array[r + 1][c] * 0.07) * 2 + parseInt(array[r + 1][c] * 0.02) * 2 + parseInt(array[r + 1][c] * 0.1) * 2 + parseInt(array[r + 1][c] * 0.05)
      if (c - 1 >= 0) {
        array[r][c - 1] += parseInt(array[r + 1][c] * 0.01)
      }else {
        sand += parseInt(array[r + 1][c] * 0.01)
      }
      if (c + 1 < n) {
        array[r][c + 1] += parseInt(array[r + 1][c] * 0.01)
      }else {
        sand += parseInt(array[r + 1][c] * 0.01)
      }
      if (r + 1 < n && c - 1 >= 0) {
        array[r + 1][c - 1] += parseInt(array[r + 1][c] * 0.07)
      }else {
        sand += parseInt(array[r + 1][c] * 0.07)
      }
      if (r + 1 < n && c + 1 < n) {
        array[r + 1][c + 1] += parseInt(array[r + 1][c] * 0.07)
      }else {
        sand += parseInt(array[r + 1][c] * 0.07)
      }
      if (r + 1 < n && c - 2 >= 0) {
        array[r + 1][c - 2] += parseInt(array[r + 1][c] * 0.02)
      }else {
        sand += parseInt(array[r + 1][c] * 0.02)
      }
      if (r + 1 < n && c + 2 < n) {
        array[r + 1][c + 2] += parseInt(array[r + 1][c] * 0.02)
      }else {
        sand += parseInt(array[r + 1][c] * 0.02)
      }
      if (r + 2 < n && c - 1 >= 0) {
        array[r + 2][c - 1] += parseInt(array[r + 1][c] * 0.1)
      }else {
        sand += parseInt(array[r + 1][c] * 0.1)
      }
      if (r + 2 < n && c + 1 < n) {
        array[r + 2][c + 1] += parseInt(array[r + 1][c] * 0.1)
      }else {
        sand += parseInt(array[r + 1][c] * 0.1)
      }
      if (r + 3 < n) {
        array[r + 3][c] += parseInt(array[r + 1][c] * 0.05)
      }else {
        sand += parseInt(array[r + 1][c] * 0.05)
      }
      if (r + 2 < n) {
        array[r + 2][c] += (parseInt(array[r + 1][c]) - sum)
      }else {
        sand += (parseInt(array[r + 1][c]) - sum)
      }
    }
    r++
  } else if (visitCount % 2 === 0 && indexCount === 1) {
    // 우
    if (c + 1 < n && array[r][c + 1] > 0) {
      let sum = parseInt(array[r][c + 1] * 0.01) * 2 + parseInt(array[r][c + 1] * 0.07) * 2 + parseInt(array[r][c + 1] * 0.02) * 2 + parseInt(array[r][c + 1] * 0.1) * 2 + parseInt(array[r][c + 1] * 0.05)
      if (r - 1 >= 0) {
        array[r - 1][c] += parseInt(array[r][c + 1] * 0.01)
      }else {
        sand += parseInt(array[r][c + 1] * 0.01)
      }
      if (r + 1 < n) {
        array[r + 1][c] += parseInt(array[r][c + 1] * 0.01)
      }else {
        sand += parseInt(array[r][c + 1] * 0.01)
      }
      if (r - 1 >= 0 && c + 1 < n) {
        array[r - 1][c + 1] += parseInt(array[r][c + 1] * 0.07)
      }else {
        sand += parseInt(array[r][c + 1] * 0.07)
      }
      if (r + 1 < n && c + 1 < n) {
        array[r + 1][c + 1] += parseInt(array[r][c + 1] * 0.07)
      }else {
        sand += parseInt(array[r][c + 1] * 0.07)
      }
      if (r - 2 >= 0 && c + 1 < n) {
        array[r - 2][c + 1] += parseInt(array[r][c + 1] * 0.02)
      }else {
        sand += parseInt(array[r][c + 1] * 0.02)
      }
      if (r + 2 < n && c + 1 < n) {
        array[r + 2][c + 1] += parseInt(array[r][c + 1] * 0.02)
      }else {
        sand += parseInt(array[r][c + 1] * 0.02)
      }
      if (r - 1 >= 0 && c + 2 < n) {
        array[r - 1][c + 2] += parseInt(array[r][c + 1] * 0.1)
      }else {
        sand += parseInt(array[r][c + 1] * 0.1)
      }
      if (r + 1 < n && c + 2 < n) {
        array[r + 1][c + 2] += parseInt(array[r][c + 1] * 0.1)
      }else {
        sand += parseInt(array[r][c + 1] * 0.1)
      }
      if (c + 3 < n) {
        array[r][c + 3] += parseInt(array[r][c + 1] * 0.05)
      }else {
        sand += parseInt(array[r][c + 1] * 0.05)
      }
      if (c + 2 < n) {
        array[r][c + 2] += (parseInt(array[r][c + 1]) - sum)
      }else {
        sand += (parseInt(array[r][c + 1]) - sum)
      }
    }
    c++
  }else if (visitCount % 2 === 0 && indexCount === -1) {
    // 상
    if (r - 1 >= 0 && array[r - 1][c] > 0) {
      let sum = parseInt(array[r - 1][c] * 0.01) * 2 + parseInt(array[r - 1][c] * 0.07) * 2 + parseInt(array[r - 1][c] * 0.02) * 2 + parseInt(array[r - 1][c] * 0.1) * 2 + parseInt(array[r - 1][c] * 0.05)
      if (c - 1 >= 0) {
        array[r][c - 1] += parseInt(array[r - 1][c] * 0.01)
      }else {
        sand += parseInt(array[r - 1][c] * 0.01)
      }
      if (c + 1 < n) {
        array[r][c + 1] += parseInt(array[r - 1][c] * 0.01)
      }else {
        sand += parseInt(array[r - 1][c] * 0.01)
      }
      if (r - 1 >= 0 && c - 1 >= 0) {
        array[r - 1][c - 1] += parseInt(array[r - 1][c] * 0.07)
      }else {
        sand += parseInt(array[r - 1][c] * 0.07)
      }
      if (r - 1 >= 0 && c + 1 < n) {
        array[r - 1][c + 1] += parseInt(array[r - 1][c] * 0.07)
      }else {
        sand += parseInt(array[r - 1][c] * 0.07)
      }
      if (r - 1 >= 0 && c - 2 >= 0) {
        array[r - 1][c - 2] += parseInt(array[r - 1][c] * 0.02)
      }else {
        sand += parseInt(array[r - 1][c] * 0.02)
      }
      if (r - 1 >= 0 && c + 2 < n) {
        array[r - 1][c + 2] += parseInt(array[r - 1][c] * 0.02)
      }else {
        sand += parseInt(array[r - 1][c] * 0.02)
      }
      if (r - 2 >= 0 && c - 1 >= 0) {
        array[r - 2][c - 1] += parseInt(array[r - 1][c] * 0.1)
      }else {
        sand += parseInt(array[r - 1][c] * 0.1)
      }
      if (r - 2 >= 0 && c + 1 < n) {
        array[r - 2][c + 1] += parseInt(array[r - 1][c] * 0.1)
      }else {
        sand += parseInt(array[r - 1][c] * 0.1)
      }
      if (r - 3 >= 0) {
        array[r - 3][c] += parseInt(array[r - 1][c] * 0.05)
      }else {
        sand += parseInt(array[r - 1][c] * 0.05)
      }
      if (r - 2 >= 0) {
        array[r - 2][c] += (parseInt(array[r - 1][c]) - sum)
      }else {
        sand += (parseInt(array[r - 1][c]) - sum)
      }
    }
    r--
  }
  index--
  if (index === 0) {
    if (indexCount === -1) {
      visitCount++
    }
    indexCount = indexCount * -1
    index = visitCount
  }
}
console.log(sand)
