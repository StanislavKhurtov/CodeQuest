function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq);
    if (Number.isInteger(sqrt)) {
        const nextSqrt = Math.sqrt(sq) + 1;
        return nextSqrt * nextSqrt;
    } else {
        return -1;
    }
}