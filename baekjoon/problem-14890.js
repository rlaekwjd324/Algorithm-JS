let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let l = parseInt(input[0].split(' ')[1])
let answer = 0
let array = new Array(n)
for (let i = 1; i <= n; i++) {
    array[i - 1] = input[i].split(' ').map(function (params) { return parseInt(params) })
}
for (let i = 0; i < n; i++) {
    let preNumber = array[i][0]
    let sameCount = 1
    let canWalk = true
    for (let j = 1; j < n; j++) {
        let tempNumber = array[i][j]
        if (tempNumber === preNumber) {
            sameCount++
            continue
        }
        if (tempNumber > preNumber + 1 || tempNumber < preNumber - 1) {
            canWalk = false
            break
        }
        if (tempNumber === preNumber + 1) {
            if (sameCount < l) {
                canWalk = false
                break
            }
            sameCount = 1
            preNumber = tempNumber
            continue
        }
        if (tempNumber === preNumber - 1) {
            preNumber = tempNumber
            canWalk = false
            sameCount = 1
            while (j < n - 1) {
                j++
                tempNumber = array[i][j]
                if (tempNumber === preNumber) {
                    sameCount++
                    if (sameCount >= l) {
                        canWalk = true
                        break
                    }
                } else {
                    break
                }
            }
            sameCount = 1
            if (!canWalk) {
                break
            }
        }
    }
    if (sameCount === n || canWalk) {
        answer++
    }
}
for (let i = 0; i < n; i++) {
    let preNumber = array[0][i]
    let sameCount = 1
    let canWalk = true
    for (let j = 1; j < n; j++) {
        let tempNumber = array[j][i]
        if (tempNumber === preNumber) {
            sameCount++
            continue
        }
        if (tempNumber > preNumber + 1 || tempNumber < preNumber - 1) {
            canWalk = false
            break
        }
        if (tempNumber === preNumber + 1) {
            if (sameCount < l) {
                canWalk = false
                break
            }
            sameCount = 1
            preNumber = tempNumber
            continue
        }
        if (tempNumber === preNumber - 1) {
            preNumber = tempNumber
            canWalk = false
            sameCount = 1
            while (j < n - 1) {
                j++
                tempNumber = array[j][i]
                if (tempNumber === preNumber) {
                    sameCount++
                    if (sameCount >= l) {
                        canWalk = true
                        if (j < n - 1 && array[j + 1][i] === tempNumber + 1) {
                            canWalk = false
                        }
                        break
                    }
                } else {
                    if (sameCount >= l) {
                        canWalk = true
                        if (j < n - 1 && array[j + 1][i] === preNumber + 1) {
                            canWalk = false
                        }
                    }
                    preNumber = tempNumber
                    break
                }
            }
            sameCount = 1
            if (!canWalk) {
                break
            }
        }
    }
    console.log(sameCount + ' ' + canWalk)
    if (sameCount === n || canWalk) {
        answer++
    }
}
console.log(answer)