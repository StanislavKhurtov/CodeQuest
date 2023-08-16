var countSheep = function (num){
    if(num===0){
        return "";
    }
    let sum = '';
    for (let i = 1; i <= num; i++) {
        sum += i + ' sheep...';
    }
    return sum;
}