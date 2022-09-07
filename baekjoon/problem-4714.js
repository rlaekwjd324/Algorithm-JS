let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(function (line) {
// return parseFloat(line);
// });
let input = fs.readFileSync('test.txt').toString().trim().split('\n').map(function (line) {
    return parseFloat(line);
});

for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
        return;
    }
    console.log('Objects weighing ' + input[i].toFixed(2) + ' on Earth will weigh ' + (Math.round(input[i] * 0.167 * 100) / 100).toFixed(2) + ' on the moon.');
}