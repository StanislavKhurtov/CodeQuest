const find_average = (array) => {
	let out = 0;
	if (array.length <= 0) {
		return 0;
	} else {
		for (let i = 0; i < array.length; i++) {
			console.log(array[i])
			out += array[i];
		}
		return out / array.length;
	}
}