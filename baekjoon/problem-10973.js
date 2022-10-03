let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let array = input[1].split(' ').map(function (line) { return parseInt(line); });
let temp = new Array();
let index = -1;
let min = 10001;
for (let i = parseInt(input[0]) - 1; i >= 0; i--) {
    temp.push(array[i]);
    if (array[i] > min) {
        index = i;
        break;
    }
    min = array[i];
}
if (index === -1) {
    console.log(index);
    return;
}
temp.sort(function (a, b) {
    return b - a;
});
for (i = 0; i < temp.length; i++) {
    if (temp[i] < array[index]) {
        array[index] = temp[i];
        temp.splice(i, 1);
        break;
    }
}
console.log(array.slice(0, index + 1).join(' ') + ' ' + temp.join(' '));