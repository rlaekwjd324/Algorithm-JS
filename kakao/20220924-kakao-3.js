function solution(users, emoticons) {
    var answer = [];
    var sales = new Array(emoticons.length);
    for (var i = 0; i < sales.length; i++) {
        sales[i] = 1;
    }
    var signupUserCount = 0;
    var saleAmount = 0;
    while (sales[0] <= 4) {
        const result = back(users, emoticons, sales);
        if (signupUserCount < result[0]) {
            signupUserCount = result[0];
            saleAmount = result[1];
        } else if (signupUserCount === result[0]) {
            saleAmount = Math.max(saleAmount, result[1]);
        }
        var isEnd = true;
        for (var i = 0; i < sales.length; i++) {
            if (sales[sales.length - i - 1] < 4) {
                sales[sales.length - i - 1]++;
                isEnd = false;
                break;
            }
            sales[sales.length - i - 1] = 1;
        }
        if (isEnd) {
            break;
        }
    }
    answer = [signupUserCount, saleAmount];
    return answer;
}

function back(users, emoticons, saleRates) {
    var maxSignupUserCount = 0;
    var maxSaleAmount = 0;
    var signupUserCount = 0;
    var saleAmount = 0;
    for (var i = 0; i < users.length; i++) {
        let saleRate = parseInt(users[i][0]);
        let maxAmount = parseInt(users[i][1]);
        var sumAmount = 0;
        for (var j = 0; j < emoticons.length; j++) {
            if (saleRates[j] * 10 >= saleRate) {
                sumAmount += (emoticons[j] * (10 - saleRates[j]) * 0.1);
            }
        }
        if (sumAmount >= maxAmount) {
            signupUserCount++;
        } else {
            saleAmount += sumAmount;
        }
    }
    if (maxSignupUserCount < signupUserCount) {
        maxSignupUserCount = signupUserCount;
        maxSaleAmount = saleAmount;
    } else if (maxSignupUserCount === signupUserCount) {
        maxSaleAmount = Math.max(maxSaleAmount, saleAmount);
    }
    return [maxSignupUserCount, maxSaleAmount];
}

solution(
    [[40, 10000], [25, 10000]], [7000, 9000]
);