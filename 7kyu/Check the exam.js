function checkExam(correctAnswers, studentAnswers) {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (studentAnswers[i] === correctAnswers[i]) {
            score += 4;
        } else if (studentAnswers[i] === "") {
            score += 0;
        } else {
            score -= 1;
        }
    }
    return score < 0 ? 0 : score;
}