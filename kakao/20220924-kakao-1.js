function solution(today, terms, privacies) {
    var answer = [];
    const termMap = new Map();

    for (var i = 0; i < terms.length; i++) {
        let type = terms[i].split(' ')[0];
        let month = parseInt(terms[i].split(' ')[1]);
        termMap.set(type, month);
    }

    for (var i = 0; i < privacies.length; i++) {
        let privacieDate = privacies[i].split(' ')[0];
        let endDate = new Date(privacieDate.split('.')[0], parseInt(privacieDate.split('.')[1]) + termMap.get(privacies[i].split(' ')[1]) - 1, privacieDate.split('.')[2]);
        let todayDate = new Date(today.split('.')[0], parseInt(today.split('.')[1]) - 1, today.split('.')[2]);
        if (todayDate >= endDate) {
            answer.push(i + 1);
        }
    }

    console.log(answer);
    return answer;
}

solution(
    "2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]);