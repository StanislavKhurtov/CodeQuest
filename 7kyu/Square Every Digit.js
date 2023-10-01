function squareDigits(num) {
    const digits = String(num).split("");
    const squaredDigits = digits.map(digit => digit * digit);
    return Number(squaredDigits.join(""));
}