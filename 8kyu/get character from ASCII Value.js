function getChar(number) {
    if (Number.isInteger(number) && number >= 0 && number <= 127) {
        return String.fromCharCode(number);
    } else {
        return null;
    }
}

const getChar = String.fromCharCode;