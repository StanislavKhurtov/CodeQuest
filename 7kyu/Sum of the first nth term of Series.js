function SeriesSum(n) {
    if (n === 0) {
        return "0.00";
    }

    let sum = 0;
    let denominator = 1;

    for (let i = 0; i < n; i++) {
        sum += 1 / denominator;
        denominator += 3;
    }

    return sum.toFixed(2);
}



function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }

    return s.toFixed(2)
}