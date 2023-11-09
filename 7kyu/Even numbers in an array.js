function evenNumbers(arr, number) {
    const result = [];
    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            result.unshift(arr[i]);
            count++;
        }

        if (count === number) {
            break;
        }
    }

    return result;
}


const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);