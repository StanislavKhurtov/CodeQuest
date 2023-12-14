function trueOrFalse(val) {
    if (val == false || !val) {
        return "false";
    } else {
        return "true";
    }
}

function trueOrFalse(val){
    return Boolean(val).toString();
}