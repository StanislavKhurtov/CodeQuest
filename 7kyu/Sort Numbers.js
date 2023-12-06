function solution(nums) {
	return (nums || []).sort(function (a, b) {
		return a - b
	});
}


function solution(nums) {
	if (nums === null || nums.length === 0) {
		return [];
	}

	return nums.sort((a, b) => a - b);
}