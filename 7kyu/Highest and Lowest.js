function highAndLow(numbers){
    const numberArray = numbers.split(' ').map(Number);
    const highest = Math.max(...numberArray);
    const lowest = Math.min(...numberArray);
    return `${highest} ${lowest}`;
}