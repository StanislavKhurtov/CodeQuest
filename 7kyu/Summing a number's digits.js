function sumDigits(number) {
    const numberString = Math.abs(number).toString();
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }

    return sum;
}