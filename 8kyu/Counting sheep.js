function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, el) => el === true ? acc + 1 : acc, 0);
}