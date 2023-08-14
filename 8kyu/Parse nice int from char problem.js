function getAge(inputString) {
    const ageString = inputString.split(" ")[0];
    const age = parseInt(ageString);
    return age;
}