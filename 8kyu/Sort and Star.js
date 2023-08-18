function twoSort(strings) {
    strings.sort();
    var firstString = strings[0];
    var result = firstString.split("").join("***");
    return result;
}
