const binaryArrayToNumber = arr => {
    const binaryString = arr.join('');
    const decimalNumber = parseInt(binaryString, 2);
    return decimalNumber;
};


const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);