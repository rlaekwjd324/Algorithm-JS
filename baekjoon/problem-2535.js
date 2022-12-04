let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let n = parseInt(input[0]);
let people = new Array();
let teamCount = 0;
for (let i = 1; i <= n; i++) {
    let line = input[i].split(' ').map(function (v) { return parseInt(v); });
    people.push({
        team: line[0],
        index: line[1],
        score: line[2]
    });
    teamCount = Math.max(teamCount, line[0]);
}
let teamMateCount = new Array(teamCount);
teamMateCount.fill(0);
people.sort(function (a, b) {
    return b.score - a.score;
});
let answer = '';
for (let i = 0; i < n; i++) {
    if (teamMateCount.reduce((partialSum, a) => partialSum + a, 0) >= 3) {
        break;
    }
    if (teamMateCount[people[i].team - 1] < 2) {
        teamMateCount[people[i].team - 1]++;
        answer += (people[i].team + ' ' + people[i].index + '\n');
    }
}
console.log(answer.trim());