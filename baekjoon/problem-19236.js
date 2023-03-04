let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let line = new Array(4)
let fishes = new Array(16)
let maxSumFish = 0
for (let i = 0; i < 16;i++) {
  fishes[i] = {}
}
for (let i = 0; i < 4;i++) {
  line[i] = new Array(4)
  let map = input[i].split(' ').map(function (v) { return parseInt(v)})
  for (let j = 0; j < 4; j++) {
    line[i][j] = { }
    line[i][j].value = map[j * 2]
    line[i][j].direction = map[j * 2 + 1] % 8
    fishes[map[j * 2] - 1].x = i
    fishes[map[j * 2] - 1].y = j
    fishes[map[j * 2] - 1].direction = map[j * 2 + 1] % 8
    fishes[map[j * 2] - 1].isDead = false
  }
}
fishes[line[0][0].value - 1].isDead = true
backTracking(0, 0, line[0][0].direction, line[0][0].value, 1)
function backTracking (x, y, direction, sum, count) {
  for (var i = 0; i < 16;i++) {
    if (fishes[i].isDead) {
      continue
    }
    let isEnd = false
    while(true) {
      switch (fishes[i].direction) {
        case 1:
          if (fishes[i].x > 0 && (fishes[i].x - 1 !== x || fishes[i].y !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x - 1][fishes[i].y].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
        case 2:
          if (fishes[i].x > 0 && fishes[i].y > 0 && (fishes[i].x - 1 !== x || fishes[i].y - 1 !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x - 1][fishes[i].y - 1].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
        case 3:
          if (fishes[i].y > 0 && (fishes[i].x !== x || fishes[i].y - 1 !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x][fishes[i].y - 1].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
        case 4:
          if (fishes[i].x < 3 && fishes[i].y > 0 && (fishes[i].x + 1 !== x || fishes[i].y - 1 !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x + 1][fishes[i].y - 1].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
        case 5:
          if (fishes[i].x < 3 && (fishes[i].x + 1 !== x || fishes[i].y !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x + 1][fishes[i].y].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
        case 6:
          if (fishes[i].x < 3 && fishes[i].y < 3 && (fishes[i].x + 1 !== x || fishes[i].y + 1 !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x + 1][fishes[i].y + 1].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
        case 7:
          if (fishes[i].y < 3 && (fishes[i].x !== x || fishes[i].y + 1 !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x][fishes[i].y + 1].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
        case 0:
        case 8:
          if (fishes[i].x > 0 && fishes[i].y < 3 && (fishes[i].x - 1 !== x || fishes[i].y + 1 !== y)) {
            isEnd = true
            let changedFishIndex = line[fishes[i].x - 1][fishes[i].y + 1].value - 1
            let temp = {}
            temp.x = fishes[i].x
            temp.y = fishes[i].y
            fishes[i].x = fishes[changedFishIndex].x
            fishes[i].y = fishes[changedFishIndex].y
            fishes[changedFishIndex].x = temp.x
            fishes[changedFishIndex].y = temp.y
            line[fishes[i].x][fishes[i].y].value = i + 1
            line[fishes[i].x][fishes[i].y].direction = fishes[i].direction
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].value = changedFishIndex + 1
            line[fishes[changedFishIndex].x][fishes[changedFishIndex].y].direction = fishes[changedFishIndex].direction
          }
          break
      }
      if (isEnd) {
        break
      }
      fishes[i].direction = ((fishes[i].direction + 1) % 8)
    }
  }
  switch (direction) {
    case 1:
      if (x > 0) {
        for (let i = 0;i < x;i++) {
          if (!fishes[line[i][y].value - 1].isDead) {
            let tempLine = JSON.parse(JSON.stringify(line))
            let tempFishes = JSON.parse(JSON.stringify(fishes))
            fishes[line[i][y].value - 1].isDead = true
            backTracking(i, y, line[i][y].direction, sum + line[i][y].value, count + 1)
            line = JSON.parse(JSON.stringify(tempLine))
            fishes = JSON.parse(JSON.stringify(tempFishes))
          }
        }
      }
      break
    case 2:
      if (x > 0 && y > 0) {
        if (x > y) {
          for (let i = 1;i <= y;i++) {
            if (!fishes[line[x - i][y - i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x - i][y - i].value - 1].isDead = true
              backTracking(x - i, y - i, line[x - i][y - i].direction, sum + line[x - i][y - i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }else {
          for (let i = 1;i <= x;i++) {
            if (!fishes[line[x - i][y - i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x - i][y - i].value - 1].isDead = true
              backTracking(x - i, y - i, line[x - i][y - i].direction, sum + line[x - i][y - i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }
      }
      break
    case 3:
      if (y > 0) {
        for (let i = 0;i < y;i++) {
          if (!fishes[line[x][i].value - 1].isDead) {
            let tempLine = JSON.parse(JSON.stringify(line))
            let tempFishes = JSON.parse(JSON.stringify(fishes))
            fishes[line[x][i].value - 1].isDead = true
            backTracking(x, i, line[x][i].direction, sum + line[x][i].value, count + 1)
            line = JSON.parse(JSON.stringify(tempLine))
            fishes = JSON.parse(JSON.stringify(tempFishes))
          }
        }
      }
      break
    case 4:
      if (x < 3 && y > 0) {
        if (3 - x > y) {
          for (let i = 1;i <= y;i++) {
            if (!fishes[line[x + i][y - i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x + i][y - i].value - 1].isDead = true
              backTracking(x + i, y - i, line[x + i][y - i].direction, sum + line[x + i][y - i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }else {
          for (let i = 1;i <= 3 - x;i++) {
            if (!fishes[line[x + i][y - i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x + i][y - i].value - 1].isDead = true
              backTracking(x + i, y - i, line[x + i][y - i].direction, sum + line[x + i][y - i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }
      }
      break
    case 5:
      if (x < 3) {
        for (let i = x + 1;i < 4;i++) {
          if (!fishes[line[i][y].value - 1].isDead) {
            let tempLine = JSON.parse(JSON.stringify(line))
            let tempFishes = JSON.parse(JSON.stringify(fishes))
            fishes[line[i][y].value - 1].isDead = true
            backTracking(i, y, line[i][y].direction, sum + line[i][y].value, count + 1)
            line = JSON.parse(JSON.stringify(tempLine))
            fishes = JSON.parse(JSON.stringify(tempFishes))
          }
        }
      }
      break
    case 6:
      if (x < 3 && y < 3) {
        if (3 - x > 3 - y) {
          for (let i = 1;i <= 3 - y;i++) {
            if (!fishes[line[x + i][y + i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x + i][y + i].value - 1].isDead = true
              backTracking(x + i, y + i, line[x + i][y + i].direction, sum + line[x + i][y + i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }else {
          for (let i = 1;i <= 3 - x;i++) {
            if (!fishes[line[x + i][y + i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x + i][y + i].value - 1].isDead = true
              backTracking(x + i, y + i, line[x + i][y + i].direction, sum + line[x + i][y + i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }
      }
      break
    case 7:
      if (y < 3) {
        for (let i = y + 1;i < 4;i++) {
          if (!fishes[line[x][i].value - 1].isDead) {
            let tempLine = JSON.parse(JSON.stringify(line))
            let tempFishes = JSON.parse(JSON.stringify(fishes))
            fishes[line[x][i].value - 1].isDead = true
            backTracking(x, i, line[x][i].direction, sum + line[x][i].value, count + 1)
            line = JSON.parse(JSON.stringify(tempLine))
            fishes = JSON.parse(JSON.stringify(tempFishes))
          }
        }
      }
      break
    case 0:
    case 8:
      if (x > 0 && y < 3) {
        if (x > 3 - y) {
          for (let i = 1;i <= 3 - y;i++) {
            if (!fishes[line[x - i][y + i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x - i][y + i].value - 1].isDead = true
              backTracking(x - i, y + i, line[x - i][y + i].direction, sum + line[x - i][y + i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }else {
          for (let i = 1;i <= x;i++) {
            if (!fishes[line[x - i][y + i].value - 1].isDead) {
              let tempLine = JSON.parse(JSON.stringify(line))
              let tempFishes = JSON.parse(JSON.stringify(fishes))
              fishes[line[x - i][y + i].value - 1].isDead = true
              backTracking(x - i, y + i, line[x - i][y + i].direction, sum + line[x - i][y + i].value, count + 1)
              line = JSON.parse(JSON.stringify(tempLine))
              fishes = JSON.parse(JSON.stringify(tempFishes))
            }
          }
        }
      }
      break
  }
  maxSumFish = Math.max(maxSumFish, sum)
}
console.log(maxSumFish)
