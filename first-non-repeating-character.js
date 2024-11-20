// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.


// input: string
// output: string or empty string (if string contains all repeating characters)
// must return the correct case for first non-repeating letter

// toUpperCase to standarize all strings for comparison purposes
// split method to transform the string to an array of substrings
// iterate through the array of strings and determine if there are any duplicates 

function firstNonRepeatingLetter(string) {
    let arrayOfStrings= string.toUpperCase().split("")
    let newObject = arrayOfStrings.reduce((acc, letter) => {
        if (!acc[letter]) {
            acc[letter] = 1
        } else {
            acc[letter]+= 1
        }
        return acc
    }, {})
    if (Object.values(newObject).indexOf(1) === -1) {
        return ""
    }
    
}
console.log(firstNonRepeatingLetter("stress"))
console.log(firstNonRepeatingLetter("sTreSS"))
console.log(firstNonRepeatingLetter("kkk"))
console.log(firstNonRepeatingLetter("moonmen"))