let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let stampCount = parseInt(input[0]);
let price = parseInt(input[1]);
console.log(getSalePrice(price, stampCount));

function getSalePrice(value, count) {
    let minPrice = value;
    if (count >= 20) {
        minPrice = Math.min(minPrice, parseInt(value * 0.75));
    }
    if (count >= 15) {
        minPrice = Math.min(minPrice, value - 2000);
    }
    if (count >= 10) {
        minPrice = Math.min(minPrice, parseInt(value * 0.9));
    }
    if (count >= 5) {
        minPrice = Math.min(minPrice, value - 500);
    }
    return minPrice >= 0 ? minPrice : 0;
}