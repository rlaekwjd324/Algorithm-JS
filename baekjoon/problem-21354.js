let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = fs.readFileSync('test.txt').toString().trim().split(' ');

let A = input[0];
let P = input[1];

if (parseInt(A) * 7 < parseInt(P) * 13) {
    console.log('Petra');
} else if (parseInt(A) * 7 > parseInt(P) * 13) {
    console.log('Axel');
} else {
    console.log('lika');
}