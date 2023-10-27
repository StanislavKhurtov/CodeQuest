function remainder(n, m){
    if (n === 0 || m === 0) {
        return "division by zero";
    } else if (Math.abs(n) > Math.abs(m)) {
        return Math.abs(n) % Math.abs(m);
    } else {
        return Math.abs(m) % Math.abs(n);
    }
}