var isSquare = function(num) {
    if (num < 0) {
        return false;
    }

    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
}