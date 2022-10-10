let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let N = parseInt(input[0]);
let array = input[1].split(' ').map(function (v) {
    return parseInt(v);
});
let line = new Array(N);
let isInArray = new Array(N);
for (let i = 0; i < N; i++) {
    line[i] = -1;
    isInArray[i] = false;
}
line[array[0]] = 1;
isInArray[0] = true;
setLine(0, isInArray, line);
function setLine(index, isInArray, line) {
    if (index === N) {
        console.log(line.join(' '));
        return;
    }
    if (index === array[0]) {
        setLine(index + 1, isInArray, line);
        return;
    }
    for (let i = 1; i < N; i++) {
        if (isInArray[i]) {
            continue;
        }
        let tempCount = 0;
        for (let j = 0; j < index; j++) {
            if (line[j] > i) {
                tempCount++;
            }
        }
        if (tempCount === array[i]) {
            line[index] = i + 1;
            isInArray[i] = true;
            setLine(index + 1, isInArray, line);
            line[index] = -1;
            isInArray[i] = false;
        }
    }
}