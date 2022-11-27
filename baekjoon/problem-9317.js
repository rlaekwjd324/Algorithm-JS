let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 0;
let answer = '';
while (input[index] !== '0 0 0' && index < input.length) {
    let line = input[index].split(' ').map(function (value) { return Number(value); });
    let w = 16 * line[0] / Math.sqrt(337);
    let h = w * 9 / 16;
    let dpiHorizontal = line[1] / w * 100;
    let dpiVertical = line[2] / h * 100;
    answer += ('Horizontal DPI: ' + Math.round(dpiHorizontal) / 100 + '\n');
    answer += ('Vertical DPI: ' + Math.round(dpiVertical) / 100 + '\n');
    index++;
}
console.log(answer);