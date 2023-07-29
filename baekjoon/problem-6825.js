let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let weight = Number(input[0])
let height = Number(input[1])
let bmi = weight / height / height
if(bmi >25) {
    return console.log('Overweight')
}else if(bmi >=18.5) {
    return console.log('Normal weight')
}
return console.log('Underweight')