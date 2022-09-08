let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = fs.readFileSync('test.txt').toString().trim().split(' ');

let a = input[0];
let b = input[1];
let c = input[2];

if (a !== b && a !== c) {
    console.log('A');
} else if (b !== c && b !== a) {
    console.log('B');
} else if (c !== a && c !== a) {
    console.log('C');
} else {
    console.log('*');
}