function minValue(values){
    const sortedDigits = Array.from(new Set(values)).sort();
    return parseInt(sortedDigits.join(''));
}