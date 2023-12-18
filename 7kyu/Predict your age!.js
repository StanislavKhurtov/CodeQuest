function predictAge(...ages) {
    const sumOfSquares = ages.reduce((acc, age) => acc + age * age, 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    const predictedAge = Math.floor(squareRoot / 2);

    return predictedAge;
}