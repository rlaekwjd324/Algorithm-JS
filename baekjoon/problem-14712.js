let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');

var arr = new Array(parseInt(input[0]));
var count = 0;
for (var i = 0; i < parseInt(input[0]); i++) {
    arr[i] = new Array(parseInt(input[1]));
}
back(0, 0);
console.log(count);

function back(x, y) {
    // x가 끝까지 돌았을 때 count++
    if (x === parseInt(input[0])) {
        count++;
        return;
    }

    // newX, newY 계산하여 back 돌기
    let newY = (y + 1 === parseInt(input[1])) ? 0 : (y + 1);
    let newX = (newY === 0) ? x + 1 : x;
    // 넴모 넣기
    // 2X2 네모가 있는지 검사
    if (x >= 1 && y >= 1) {
        if (!arr[x - 1][y] || !arr[x - 1][y - 1] || !arr[x][y - 1]) {
            arr[x][y] = true;
            back(newX, newY);
        }
    } else {
        arr[x][y] = true;
        back(newX, newY);
    }
    arr[x][y] = false;
    back(newX, newY);
}