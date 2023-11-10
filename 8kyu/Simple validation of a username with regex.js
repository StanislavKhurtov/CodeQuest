function validateUsr(username) {
    var regex = /^[a-z0-9_]{4,16}$/;
    var isValid = regex.test(username);
    return isValid;
}