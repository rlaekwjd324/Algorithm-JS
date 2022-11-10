let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let line = input[0].split(' ').map(function (params) {
    return parseInt(params);
})
let n = line[0];
let p = line[1];
let h = line[2];
let answer = '';
for (let i = 1; i <= n; i++) {
    let d = parseInt(input[i]);
    if (p > d) {
        answer += 'NTV: Dollar dropped by ' + (p - d) + ' Oshloobs\n';
    } else if (p < d && h < d) {
        answer += 'BBTV: Dollar reached ' + d + ' Oshloobs, A record!\n';
        h = d;
    }
    p = d;
}
console.log(answer);