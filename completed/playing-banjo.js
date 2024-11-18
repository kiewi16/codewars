// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name.toUpperCase().charAt(0) === "R") {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}
console.log(areYouPlayingBanjo("rebecca"))
console.log(areYouPlayingBanjo("Kim"))

function areYouPlayingBanjo2(name) {
    return name + " " + (name.toUpperCase().charAt(0) === "R" ? 'plays' : 'does not play') + " " + "banjo"

}
console.log(areYouPlayingBanjo2("rob"))
console.log(areYouPlayingBanjo2("greg"))