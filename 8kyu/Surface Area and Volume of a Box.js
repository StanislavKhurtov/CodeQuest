function getSize(length, width, height) {
    var surfaceArea = 2 * (length * width + length * height + width * height);
    var volume = length * width * height;
    return [surfaceArea, volume];
}