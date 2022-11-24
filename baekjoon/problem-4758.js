let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let index = 0;
let answer = '';
while (input[index] !== '0 0 0') {
    let powers = input[index].split(' ');
    let speed = parseFloat(powers[0]);
    let weight = parseInt(powers[1]);
    let strength = parseInt(powers[2]);
    let position = ''
    if (speed <= 4.5 && weight >= 150 && strength >= 200) {
        position += 'Wide Receiver ';
    }
    if (speed <= 6.0 && weight >= 300 && strength >= 500) {
        position += 'Lineman ';
    }
    if (speed <= 5.0 && weight >= 200 && strength >= 300) {
        position += 'Quarterback ';
    }
    answer += (position.length === 0 ? 'No positions' : position);
    answer += '\n';
    index++;
}
console.log(answer);