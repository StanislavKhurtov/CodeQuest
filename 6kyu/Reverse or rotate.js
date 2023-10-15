function revrot(str, sz) {
    if (sz <= 0 || str === "" || sz > str.length) {
        return ""; // Return an empty string for invalid input
    }

    var chunks = [];
    for (var i = 0; i < str.length; i += sz) {
        var chunk = str.slice(i, i + sz);
        if (chunk.length === sz) {
            var sumOfCubes = chunk.split('').reduce(function(sum, digit) {
                return sum + Math.pow(Number(digit), 3);
            }, 0);

            if (sumOfCubes % 2 === 0) {
                chunks.push(chunk.split('').reverse().join(''));
            } else {
                chunks.push(chunk.slice(1) + chunk[0]);
            }
        }
    }

    return chunks.join('');
}