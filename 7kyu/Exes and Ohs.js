function XO(str) {
    let countX = 0;
    let countO = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char === 'x') {
            countX++;
        } else if (char === 'o') {
            countO++;
        }
    }

    return countX === countO;
}



function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}