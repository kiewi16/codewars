// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). //thequickbrownfox

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
   let newObject = string.toLowerCase().replaceAll(' ', '').replaceAll(/[^a-z]/g, '').split('').reduce((acc, letter) => {
    if (!acc[letter]) {
        acc[letter] = 1
    } else {
        acc[letter] ++
    }
    return acc
   }, {})
    if (Object.keys(newObject).length === 26) {
        return true
    } else if (Object.keys(newObject).length > 26) {
        return `ERROR this is too long`
    } else {
        return false
    }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!!!!!!" ))