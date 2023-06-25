function oddOrEven(array) {
	let sum = array.reduce((acc, el) => acc + el, 0);
	return sum % 2 === 0 ? "even" : "odd";
}