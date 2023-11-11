function removeExclamationMarks(str, n) {
    let count = 0;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '!' && count < n) {
            count++;
        } else {
            result += str[i];
        }
    }

    return result;
}