let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 0;
let answer = '';
while (input[index] !== '00:00 00:00') {
    let line = '';
    let times = input[index].split(' ');
    let firstHour = times[0].split(':').map(function (value) { return parseInt(value); })[0];
    let firstMinute = times[0].split(':').map(function (value) { return parseInt(value); })[1];
    let secondHour = times[1].split(':').map(function (value) { return parseInt(value); })[0];
    let secondMinute = times[1].split(':').map(function (value) { return parseInt(value); })[1];
    let min = 0;
    let hour = 0;
    let day = 0;
    if (firstMinute + secondMinute >= 60) {
        firstHour++;
        min = firstMinute + secondMinute - 60;
    } else {
        min = firstMinute + secondMinute;
    }
    line = min >= 10 ? min.toString() : '0' + min.toString();
    if (firstHour + secondHour >= 24) {
        day = parseInt((firstHour + secondHour) / 24);
        hour = (firstHour + secondHour) % 24;
    } else {
        hour = firstHour + secondHour;
    }
    line = ((hour >= 10 ? hour.toString() : '0' + hour.toString()) + ':' + line + (day > 0 ? ' +' + day : ''));
    answer += (line + '\n');
    index++;
}
console.log(answer);