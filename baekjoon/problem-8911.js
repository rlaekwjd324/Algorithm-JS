let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let answer = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    let moves = input[i].split('');
    let maxX = 0;
    let maxY = 0;
    let minX = 0;
    let minY = 0;
    let x = 0;
    let y = 0;
    let direction = 1;
    for (let j = 0; j < moves.length; j++) {
        switch (moves[j]) {
            case 'F':
                switch (direction) {
                    case 1:
                        y++;
                        break;
                    case 2:
                        x++;
                        break;
                    case 3:
                        y--;
                        break;
                    case 4:
                        x--;
                        break;
                }
                break;
            case 'B':
                switch (direction) {
                    case 1:
                        y--;
                        break;
                    case 2:
                        x--;
                        break;
                    case 3:
                        y++;
                        break;
                    case 4:
                        x++;
                        break;
                }
                break;
            case 'L':
                direction = direction > 1 ? direction - 1 : direction + 3;
                break;
            case 'R':
                direction = direction < 4 ? direction + 1 : direction - 3;
                break;
        }
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
    }
    answer += ((maxX - minX) * (maxY - minY) + '\n');
}
console.log(answer);