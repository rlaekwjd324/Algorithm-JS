let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0].split('-')
let month = Number(n[1])
let date = Number(n[2])
if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
  return console.log('Aries')
}
if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
  return console.log('Taurus')
}
if ((month === 5 && date >= 21) || (month === 6 && date <= 20)) {
  return console.log('Gemini')
}
if ((month === 6 && date >= 21) || (month === 7 && date <= 22)) {
  return console.log('Cancer')
}
if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
  return console.log('Leo')
}
if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
  return console.log('Virgo')
}
if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
  return console.log('Libra')
}
if ((month === 10 && date >= 23) || (month === 11 && date <= 22)) {
  return console.log('Scorpio')
}
if ((month === 11 && date >= 23) || (month === 12 && date <= 21)) {
  return console.log('Sagittarius')
}
if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
  return console.log('Capricorn')
}
if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
  return console.log('Aquarius')
}
if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {
  return console.log('Pisces')
}
