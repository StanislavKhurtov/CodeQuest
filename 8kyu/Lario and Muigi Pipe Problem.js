function pipeFix(arr) {
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);

    const fixedPipes = Array.from({ length: maxVal - minVal + 1 }, (_, index) => index + minVal);

    return fixedPipes;
}