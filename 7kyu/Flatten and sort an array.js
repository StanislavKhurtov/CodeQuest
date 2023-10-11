function flattenAndSort(array) {
    var flattenedArray = array.concat.apply([], array);
    return flattenedArray.sort(function(a, b) {
        return a - b;
    });
}