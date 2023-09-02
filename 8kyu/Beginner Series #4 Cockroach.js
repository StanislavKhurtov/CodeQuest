function cockroachSpeed(s) {
	var speedCms = s * 100000 / 3600;
	speedCms = Math.floor(speedCms);
	return speedCms;
}