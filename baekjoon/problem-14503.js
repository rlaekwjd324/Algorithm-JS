let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let r = parseInt(input[1].split(' ')[0])
let c = parseInt(input[1].split(' ')[1])
let d = parseInt(input[1].split(' ')[2])
let array = new Array(n)
let count = 0
for (let i = 0; i < n;i++) {
  array[i] = input[i + 2].split(' ').map(function (v) { return parseInt(v)} )
}
array[r][c] = 2
count++
while(true) {
  if ((r<1 || array[r - 1][c] !== 0) && (c < 1 || array[r][c - 1] !== 0) && (r > n - 1|| array[r + 1][c] !== 0) && (c > m - 1 || array[r][c + 1] !== 0)) {
    switch (d) {
      case 0:
        r++
        break
      case 1:
        c--
        break
      case 2:
        r--
        break
      case 3:
        c++
        break
    }
    if (r < 0 || r >= n || c < 0 || c >= m || array[r][c] === 1) {
      console.log(count)
      return
    }
  } else {
    d = (d+3) %4
    switch (d) {
      case 0:
        if (r > 0) {
          if (array[r - 1][c] === 0) {
            r--
            array[r][c] = 2
            count++
          }
        }
        break
      case 1:
        if (c < m - 1) {
          if (array[r][c + 1] === 0) {
            c++
            array[r][c] = 2
            count++
          }
        }
        break
      case 2:
        if (r < n - 1) {
          if (array[r + 1][c] === 0) {
            r++
            array[r][c] = 2
            count++
          }
        }
        break
      case 3:
        if (c > 0) {
          if (array[r][c - 1] === 0) {
            c--
            array[r][c] = 2
            count++
          }
        }
        break
    }
  }
}
