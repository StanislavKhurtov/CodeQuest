function sumStr(a, b) {
    if (a === "" && b === "") {
        return "0"
    }
    let c = +a + +b
    return c.toString()

}