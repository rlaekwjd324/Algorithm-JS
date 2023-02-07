let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = parseInt(input[0].split(' ')[0])
let m = parseInt(input[0].split(' ')[1])
let r = parseInt(input[0].split(' ')[2])
let tempN = n
let tempM = m
let temp = ''
let array = new Array(n)
for (let i = 1; i <= n; i++) {
    array[i - 1] = input[i].split(' ').map(function (params) { return parseInt(params) })
}
for (let i = 0; i < r; i++) {
    array = changeArray(input[n + 1].split(' ')[i], array)
}
let answer = ''
for (let i = 0; i < tempN; i++) {
    answer += (array[i].join(' ') + '\n')
}
console.log(answer)

function changeArray(number, array) {
    let tempArray = []
    switch (number) {
        case '1':
            tempArray = new Array(tempN)
            for (let i = 0; i < tempN; i++) {
                tempArray[i] = array[tempN - i - 1]
            }
            break
        case '2':
            tempArray = new Array(tempN)
            for (let i = 0; i < tempN; i++) {
                tempArray[i] = new Array(tempM)
                for (let j = 0; j < tempM; j++) {
                    tempArray[i][j] = array[i][tempM - j - 1]
                }
            }
            break
        case '3':
            tempArray = new Array(tempM)
            for (let i = 0; i < tempM; i++) {
                tempArray[i] = new Array(tempN)
                for (let j = 0; j < tempN; j++) {
                    tempArray[i][j] = array[tempN - j - 1][i]
                }
            }
            temp = tempN
            tempN = tempM
            tempM = temp
            break
        case '4':
            tempArray = new Array(tempM)
            for (let i = 0; i < tempM; i++) {
                tempArray[i] = new Array(tempN)
                for (let j = 0; j < tempN; j++) {
                    tempArray[i][j] = array[j][tempM - i - 1]
                }
            }
            temp = tempN
            tempN = tempM
            tempM = temp
            break
        case '5':
            tempArray = new Array(tempN)
            for (let i = 0; i < tempN; i++) {
                tempArray[i] = new Array(tempM)
            }
            for (let i = 0; i < tempN; i++) {
                for (let j = 0; j < tempM; j++) {
                    if (i < tempN / 2 && j < tempM / 2) {
                        // 1사분면
                        tempArray[i][j + tempM / 2] = array[i][j]
                    } else if (i < tempN / 2 && j >= tempM / 2) {
                        // 2사분면
                        tempArray[i + tempN / 2][j] = array[i][j]
                    } else if (i >= tempN / 2 && j >= tempM / 2) {
                        // 3사분면
                        tempArray[i][j - tempM / 2] = array[i][j]
                    } else {
                        // 4사분면
                        tempArray[i - tempN / 2][j] = array[i][j]
                    }
                }
            }
            break
        case '6':
            tempArray = new Array(tempN)
            for (let i = 0; i < tempN; i++) {
                tempArray[i] = new Array(tempM)
            }
            for (let i = 0; i < tempN; i++) {
                for (let j = 0; j < tempM; j++) {
                    if (i < tempN / 2 && j < tempM / 2) {
                        // 1사분면
                        tempArray[i + tempN / 2][j] = array[i][j]
                    } else if (i < tempN / 2 && j >= tempM / 2) {
                        // 2사분면
                        tempArray[i][j - tempM / 2] = array[i][j]
                    } else if (i >= tempN / 2 && j >= tempM / 2) {
                        // 3사분면
                        tempArray[i - tempN / 2][j] = array[i][j]
                    } else {
                        // 4사분면
                        tempArray[i][j + tempM / 2] = array[i][j]
                    }
                }
            }
            break
    }
    return tempArray
}