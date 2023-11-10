function usdcny(usd) {
    var conversionRate = 6.75;
    var cnyAmount = (usd * conversionRate).toFixed(2);
    return cnyAmount + ' Chinese Yuan';
}




usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;