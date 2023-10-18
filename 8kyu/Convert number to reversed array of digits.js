
function digitize(number) {
	return Array.from(String(number), Number).reverse();
}