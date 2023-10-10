function nbDig(n, d) {
	let count = 0;
	for (let k = 0; k <= n; k++) {
		const square = k * k;
		const digits = String(square).split("");
		count += digits.filter((digit) => Number(digit) === d).length;
	}
	return count;
}