function betterThanAverage(classPoints, yourPoints) {
	return yourPoints > classPoints.reduce(function (sum, x) { return sum + x }, yourPoints) / (classPoints.length + 1)
}
