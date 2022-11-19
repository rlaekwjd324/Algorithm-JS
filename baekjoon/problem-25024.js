let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ').map(function (params) {
        return parseInt(params);
    });
    if (isTime(line[0], line[1])) {
        answer += 'Yes ';
    } else {
        answer += 'No ';
    }
    if (isDate(line[0], line[1])) {
        answer += 'Yes\n';
    } else {
        answer += 'No\n';
    }
}
console.log(answer);

function isTime(hour, minute) {
    if (hour < 24 && minute < 60) {
        return true;
    }
    return false;
}
function isDate(month, day) {
    switch (month) {
        case 2:
            if (day >= 1 && day <= 29) {
                return true;
            }
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (day >= 1 && day <= 31) {
                return true;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day >= 1 && day <= 30) {
                return true;
            }
            break;
    }
    return false;
}