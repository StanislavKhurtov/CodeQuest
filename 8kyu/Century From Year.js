function century(year) {
    return Math.floor(year/100) + ((year%100) ? 1 : 0)
}


const century = year => Math.ceil(year/100)