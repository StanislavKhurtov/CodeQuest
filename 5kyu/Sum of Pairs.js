function sumPairs(integers, sum) {
    let seen = new Set();

    for (let i = 0; i < integers.length; i++) {
        let difference = sum - integers[i];
        if (seen.has(difference)) {
            return [difference, integers[i]];
        }
        seen.add(integers[i]);
    }

    return undefined;
}