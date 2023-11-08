function wordsToMarks(word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let value = 0;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const position = alphabet.indexOf(char) + 1;
        value += position;
    }

    return value;
}





const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)