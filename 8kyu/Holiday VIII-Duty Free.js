function dutyFree(normPrice, discount, holidayCost) {
    const savingsPerBottle = normPrice * (discount / 100);
    const numBottles = Math.floor(holidayCost / savingsPerBottle);
    return numBottles;
}