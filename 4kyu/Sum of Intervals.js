function sumIntervals(intervals) {
    // Sort intervals based on the start value
    intervals.sort((a, b) => a[0] - b[0]);

    let totalLength = 0;
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        // Check for overlapping intervals
        if (nextInterval[0] <= currentInterval[1]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            totalLength += currentInterval[1] - currentInterval[0];
            currentInterval = nextInterval;
        }
    }

    totalLength += currentInterval[1] - currentInterval[0];
    return totalLength;
}