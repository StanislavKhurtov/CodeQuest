function enough(cap, on, wait) {
    var totalPassengers = on + wait;
    if (totalPassengers <= cap) {
        return 0;
    } else {
        return totalPassengers - cap;
    }
}