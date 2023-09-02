function correct(string){
    const corrections = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    };

    const correctedText = string.replace(/[501]/g, match => corrections[match]);
    return correctedText;
}