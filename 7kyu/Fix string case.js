function solve(s) {
	let lowercaseCount = 0;
	let uppercaseCount = 0;

	// Count the number of lowercase and uppercase letters in the string
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i].toLowerCase()) {
			lowercaseCount++;
		} else {
			uppercaseCount++;
		}
	}

	// Determine whether to convert to lowercase or uppercase based on the counts
	if (lowercaseCount >= uppercaseCount) {
		return s.toLowerCase();
	} else {
		return s.toUpperCase();
	}
}