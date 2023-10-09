function gimme(inputArray) {
	const sortedArray = [...inputArray].sort((a, b) => a - b);
	const middleNumber = sortedArray[1];

	const index = inputArray.indexOf(middleNumber);

	return index;
  }