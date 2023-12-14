function remove(s,n){
    return s.replace(/!/g, function(match) {
        return n-- > 0 ? "" : match;
    })
}