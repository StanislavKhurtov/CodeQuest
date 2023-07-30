function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}


onst positiveSum = arr => arr.reduce((accumulator, current) => current > 0 ? accumulator + current : accumulator, 0);


const positiveSum = arr => arr.filter(number => number > 0).reduce((accumulator, current) => accumulator + current, 0)

