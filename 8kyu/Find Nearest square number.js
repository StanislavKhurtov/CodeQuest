function nearestSq(n) {
    var sqrt = Math.sqrt(n);
    var lowerSq = Math.floor(sqrt) ** 2;
    var higherSq = Math.ceil(sqrt) ** 2;

    if (n - lowerSq <= higherSq - n) {
        return lowerSq;
    } else {
        return higherSq;
    }
}