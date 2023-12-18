function billboard(name, price = 30){
    const nameLength = name.length;
    let cost = 0;

    for (let i = 0; i < nameLength; i++) {
        cost += price;
    }

    return cost;
}