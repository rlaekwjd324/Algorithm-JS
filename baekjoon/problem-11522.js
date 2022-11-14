// let fs = require('fs');
// // let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('test.txt').toString().trim().split('\n');
// let answer = '';
// for (let i = 1; i <= parseInt(input[0]); i++) {
//     let line = input[i].split(' ').map(function (v) { return parseInt(v); });
//     answer += (line[0].toString() + ' ');
//     let s1 = 0;
//     let s2 = 0;
//     let s3 = 0;
//     for (let j = 1; j <= line[1]; j++) {
//         s1 += j;
//         s2 += (j * 2 - 1);
//         s3 += (j * 2);
//     }
//     answer += (s1 + ' ' + s2 + ' ' + s3 + '\n');
// }
// console.log(answer.trim());

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let answer = '';
    for (let i = 1; i <= parseInt(input[0]); i++) {
        let line = input[i].split(' ').map(function (v) { return parseInt(v); });
        answer += (line[0] + ' ');
        let s1 = 0;
        let s2 = 0;
        let s3 = 0;
        for (let j = 1; j <= line[1]; j++) {
            s1 += j;
            s2 += (j * 2 - 1);
            s3 += (j * 2);
        }
        answer += (s1 + ' ' + s2 + ' ' + s3 + '\n');
    }
    console.log(answer.trim());
    process.exit();
});