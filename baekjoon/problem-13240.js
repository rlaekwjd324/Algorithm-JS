const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    var answer = '';
    for (var i = 0; i < parseInt(line.split(' ')[0]); i++) {
        for (var j = 0; j < parseInt(line.split(' ')[1]); j++) {
            if ((i + j) % 2 === 0) {
                answer += '*';
            } else {
                answer += '.';
            }
        }
        answer += '\n';
    }
    console.log(answer);
    rl.close();
}).on("close", function () {
    process.exit();
});
