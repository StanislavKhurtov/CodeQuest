function replace(sentence) {
    const vowels = "aeiouAEIOU";
    let replacedSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (vowels.includes(char)) {
            replacedSentence += "!";
        } else {
            replacedSentence += char;
        }
    }
    return replacedSentence;
}