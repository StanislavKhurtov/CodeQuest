function areYouPlayingBanjo(name) {
    let lowerName = name.toLowerCase()
    if (lowerName.at(0) === "r") {
        return name + " plays banjo"
    } else {
      return name + " does not play banjo"
    }
}