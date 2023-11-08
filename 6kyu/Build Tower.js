function towerBuilder(floors) {
    const tower = [];

    for (let i = 0; i < floors; i++) {
        const spaces = ' '.repeat(floors - i - 1);
        const blocks = '*'.repeat(2 * i + 1);
        const floor = spaces + blocks + spaces;
        tower.push(floor);
    }

    return tower;
}