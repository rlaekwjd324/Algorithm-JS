let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let writtenBingo = new Array(5);
let calledBingo = new Array(5);
for (let i = 0; i < 5; i++) {
    writtenBingo[i] = input[i].split(' ').map(function (params) {
        return parseInt(params);
    })
}
let index = 0;
for (let i = 0; i < 5; i++) {
    calledBingo = input[5 + i].split(' ').map(function (params) {
        return parseInt(params);
    })
    for (let j = 0; j < 5; j++) {
        index++;
        writtenBingo = pickNumber(calledBingo[j], writtenBingo);
        if (countBingo(writtenBingo) >= 3) {
            console.log(index);
            return;
        }
    }
}
function pickNumber(number, bingo) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (bingo[i][j] === number) {
                bingo[i][j] = 0;
                return bingo;
            }
        }
    }
    return bingo;
}
function countBingo(array) {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (array[i][j] !== 0) {
                break;
            }
            if (j === 4) {
                count++;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (array[j][i] !== 0) {
                break;
            }
            if (j === 4) {
                count++;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        if (array[i][i] !== 0) {
            break;
        }
        if (i === 4) {
            count++;
        }
    }
    for (let i = 0; i < 5; i++) {
        if (array[i][4 - i] !== 0) {
            break;
        }
        if (i === 4) {
            count++;
        }
    }
    return count;
}