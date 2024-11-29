// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
    let newString = []
    string.split(' ').forEach(word => {
        if (word.length >= 5) {
            newString.push(word.split('').reverse().join(''))
        } else {
            newString.push(word)
        }
    })
    return newString.join(' ')
}
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))

function spinWords2(string) {
    return string.split(' ').map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word
    }).join(' ')
}
console.log(spinWords2("Hey fellow warriors"))
console.log(spinWords2("This is a test"))
console.log(spinWords2("This is another test"))