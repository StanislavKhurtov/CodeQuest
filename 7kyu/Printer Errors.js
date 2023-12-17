function printerError(s) {
    let errors = 0;
    const validRange = /[a-m]/;

    for (let i = 0; i < s.length; i++) {
        if (!validRange.test(s[i])) {
            errors++;
        }
    }

    return errors + '/' + s.length;
}