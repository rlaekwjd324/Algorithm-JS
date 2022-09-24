solution([7, 5, 144, 1000000000000000]);

function canBinaryTree(binaryNumber) {

}

function solution(numbers) {
    const array = [1, 3, 7, 15, 31, 63];
    var answer = [];
    for (var i = 0; i < numbers.length; i++) {
        const fixedBinaryNumber = numbers[i].toString(2);
        var binaryNumber = numbers[i].toString(2);
        var canBinaryTree = 1;
        for (var j = 1; j < array.length; j++) {
            if (binaryNumber.length <= array[array.length - j] && binaryNumber.length > array[array.length - j - 1]) {
                binaryNumber = '0'.repeat(array[array.length - j] - binaryNumber.length) + binaryNumber;
                break;
            }
        }
        console.log(binaryNumber);
        for (var j = 0; j < fixedBinaryNumber.length; j++) {
            if (j % 2 === 1) {
                if (fixedBinaryNumber.split('')[j] === '0') {
                    canBinaryTree = 0;
                    break;
                }
            }
        }
        answer.push(canBinaryTree);
    }
    console.log(answer);
    return answer;
}