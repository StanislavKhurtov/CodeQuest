let cubeChecker = (volume, side) => {
    if (volume <= 0 || side <= 0) {
        return false; // Invalid numbers
    }

    const calculatedVolume = side * side * side;
    return calculatedVolume === volume;
}



var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
};