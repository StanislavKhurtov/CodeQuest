const isPalindrome = (x) => {
	// your code here
	x = x.toLowerCase();
	return x == x.split('').reverse().join('');
}