let input =
    require('fs').readFileSync('test.txt').toString().trim().split(' ').map(function (e) {
        return e.split('').map(function (e) {
            return parseInt(e);
        });
    });
var sum = '';
while (input[0].length > 0 || input[1].length > 0) {
    var a = input[0].pop();
    var b = input[1].pop();
    a = (a === undefined ? 0 : a);
    b = (b === undefined ? 0 : b);
    sum = (a + b) + sum;
}
console.log(sum);