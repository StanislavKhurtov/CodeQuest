function doubleChar(str) {
    let repeatedString = "";
    for ( let i = 0; i< str.length; i++) {
        repeatedString += str[i] + str[i]
    }
    return repeatedString
}
