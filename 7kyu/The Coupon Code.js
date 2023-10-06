function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

	if (enteredCode !== correctCode) {
		return false;
	}
	let current_date = new Date(currentDate);
	let expiration_date = new Date(expirationDate);

	if (current_date > expiration_date) {
		return false;
	}
	return true;
}