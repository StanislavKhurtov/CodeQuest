function remove(str) {
    return str.replace(/!/g, '').concat('!');
}