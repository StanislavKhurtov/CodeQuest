function evaporator(content, evap_per_day, threshold) {
    let days = 0;
    const thresholdRatio = threshold / 100;
    let remainingContent = 1;

    while (remainingContent > thresholdRatio) {
        remainingContent *= 1 - (evap_per_day / 100);
        days++;
    }

    return days;
}