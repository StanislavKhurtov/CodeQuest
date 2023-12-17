function contamination(text, character) {
    if (text === '' || character === '') {
        return '';
    }

    return character.repeat(text.length);
}