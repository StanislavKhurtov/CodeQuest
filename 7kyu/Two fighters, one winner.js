function declareWinner(fighter1, fighter2, firstAttacker) {
    let currentAttacker, currentDefender;
    if (fighter1.name === firstAttacker) {
        currentAttacker = fighter1;
        currentDefender = fighter2;
    } else {
        currentAttacker = fighter2;
        currentDefender = fighter1;
    }


    while (true) {
        currentDefender.health -= currentAttacker.damagePerAttack;
        if (currentDefender.health <= 0) {
            return currentAttacker.name;
        }
        [currentAttacker, currentDefender] = [currentDefender, currentAttacker];
    }
}