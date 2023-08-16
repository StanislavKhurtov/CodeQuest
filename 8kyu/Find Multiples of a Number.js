function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i <= limit; i = i + integer) {
        arr.push(i)
    }
    return arr
}
