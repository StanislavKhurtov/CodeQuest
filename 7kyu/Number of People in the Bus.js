var number = function(stops) {
    let passengers = 0;

    for (let i = 0; i < stops.length; i++) {
        const [onboard, offboard] = stops[i];
        passengers += onboard - offboard;
    }

    return passengers >= 0 ? passengers : 0;
}