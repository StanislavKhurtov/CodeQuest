function shortenToDate(dateTimeString) {
    const index = dateTimeString.indexOf(',');
    if (index !== -1) {
        return dateTimeString.slice(0, index);
    }
    return dateTimeString;
}

function shortenToDate(longDate) {
    return longDate.split(",")[0];
}