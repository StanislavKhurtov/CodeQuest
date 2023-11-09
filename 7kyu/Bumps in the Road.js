function bump(x){

    var bumps = x.split("n").length - 1;
    if (bumps <= 15) {
        return "Woohoo!";
    } else {
        return "Car Dead";
    }
}