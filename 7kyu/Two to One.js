function longest(s1, s2) {
	const combinedString = s1 + s2;
	const distinctChars = Array.from(new Set(combinedString));
	const sortedChars = distinctChars.sort();

	return sortedChars.join('');
}

/*
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

*/