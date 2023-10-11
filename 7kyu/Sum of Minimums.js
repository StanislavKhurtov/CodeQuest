function sumOfMinimums(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		let min = arr[i][0];

		for (let j = 1; j < arr[i].length; j++) {
			if (arr[i][j] < min) {
				min = arr[i][j];
			}
		}
		sum += min;
	}

	return sum;
}


function sumOfMinimums(arr) {
	return arr.map(row => Math.min(...row)).reduce((sum, min) => sum + min, 0);
}
