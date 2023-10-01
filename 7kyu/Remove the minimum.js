function removeSmallest(numbers) {
    const sortedNumbers = numbers.slice();
    const smallestIndex = sortedNumbers.indexOf(Math.min(...sortedNumbers));
    sortedNumbers.splice(smallestIndex, 1);
    return sortedNumbers;
}