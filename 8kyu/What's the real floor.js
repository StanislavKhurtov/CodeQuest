function getRealFloor(floor) {
    if (floor > 0) {
        // Adjust for the missing 13th floor
        if (floor >= 13) {
            return floor - 2;
        } else {
            return floor - 1;
        }
    } else {
        return floor;
    }
}