let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let array = new Array(12)
for (let i = 0; i < 12; i++) {
  array[i] = 0
}
for (let i = 1; i <= n; i++) {
  let gender = Number(input[i].split(' ')[0])
  let grade = Number(input[i].split(' ')[1])
  array[(grade - 1) * 2 + gender]++
}
let lowGradeRoomCount = Math.ceil((array[0] + array[1] + array[2] + array[3]) / k)
let middleGradeFemaleRoomCount = Math.ceil((array[4] + array[6]) / k)
let middleGradeMaleRoomCount = Math.ceil((array[5] + array[7]) / k)
let highGradeFemaleRoomCount = Math.ceil((array[8] + array[10]) / k)
let highGradeMaleRoomCount = Math.ceil((array[9] + array[11]) / k)
console.log(lowGradeRoomCount + middleGradeFemaleRoomCount + middleGradeMaleRoomCount + highGradeFemaleRoomCount + highGradeMaleRoomCount)
