var capitals = function (word) {
    var capitalIndexes = [];
    for (var index = 0; index < word.length; index++) {
        var char = word.charAt(index);
        if (char === char.toUpperCase()) {
            capitalIndexes.push(index);
        }
    }
    return capitalIndexes;
};