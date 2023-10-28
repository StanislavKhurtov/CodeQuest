function derive(coefficient, exponent) {
	let product = coefficient * exponent;
	let newExponent = exponent - 1;
	return product + "x^" + newExponent;
}


function derive(coefficient, exponent) {
	return `${coefficient * exponent}x^${exponent - 1}`
}