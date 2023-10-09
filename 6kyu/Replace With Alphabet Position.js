function alphabetPosition(text) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const lowercaseText = text.toLowerCase();
	let result = '';

	for (let i = 0; i < lowercaseText.length; i++) {
		const char = lowercaseText.charAt(i);
		const position = alphabet.indexOf(char) + 1;

		if (position > 0) {
			result += position + ' ';
		}
	}

	// Remove the trailing space
	result = result.trim();

	return result;
}