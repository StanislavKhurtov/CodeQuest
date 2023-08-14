function points(matches) {
    let totalPoints = 0;

    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const [x, y] = match.split(":");

        if (x > y) {
            totalPoints += 3; // Win
        } else if (x < y) {
            totalPoints += 0; // Loss
        } else {
            totalPoints += 1; // Tie
        }
    }

    return totalPoints;
}