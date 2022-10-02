let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
var index = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
var answer = '';
while (input[index] !== 'end') {
    let word = input[index];
    var vowelCount = 0;
    var consonantCount = 0;
    var preCharacter = '';
    var isExistVowel = false;
    for (let i = 0; i < word.length; i++) {
        if (preCharacter === word.charAt(i) && word.charAt(i) !== 'o' && word.charAt(i) !== 'e') {
            answer += ('<' + word + '> is not acceptable.\n');
            break;
        }
        if (vowels.includes(word.charAt(i))) {
            consonantCount = 0;
            vowelCount++;
            isExistVowel = true;
        } else {
            vowelCount = 0;
            consonantCount++;
        }

        if (vowelCount >= 3 || consonantCount >= 3) {
            answer += ('<' + word + '> is not acceptable.\n');
            break;
        }
        if (i === word.length - 1) {
            if (isExistVowel) {
                answer += ('<' + word + '> is acceptable.\n');
            } else {
                answer += ('<' + word + '> is not acceptable.\n');
            }
        } else {
            preCharacter = word.charAt(i);
        }
    }
    index++;
}
console.log(answer);