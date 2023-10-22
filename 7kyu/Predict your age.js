function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    var ages = [age1, age2, age3, age4, age5, age6, age7, age8];

    var sumOfSquares = ages.reduce(function (sum, age) {
        return sum + age * age;
    }, 0);

    var squareRoot = Math.sqrt(sumOfSquares);
    var result = Math.floor(squareRoot / 2);

    return result;
}