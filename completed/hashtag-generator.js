// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// input: string
// declare a variable to hold the array of strings with spaces removed
// first use split(" ") to create an array of strings to iterate over. 
// second chain forEach to iterate over the new array of strings
// if string is truthy push it to a new array

// capitalize the first letter of each word in the new array
// use map to iterate over the array of strings
// use charAt(0).toUpperCase() + slice(1) to capitalize the first letter of each element in the array and attach the capitalized letter to the rest of the word. slice(1) gets the rest of the string starting at index position 1. 

// use join to transform array of strings into a single string
// use .length to determine the length of the string
// if string.length > 140 or string is falsy, then return false
// otherwise return the string with a hashtag in front of it

// output: 
// if the final result is longer than 140 chars, return false
// if the input or the result is an empty string, return false
// otherwise return string with # added as the first character with the first letter capitalized 

// note: all spaces must be removed from the original string. The 140 char count is completed AFTER the spaces have been removed.

function generateHashtag(string) {
    let noSpaces = []
    string.split(" ").forEach(character => character ? noSpaces.push(character) : null)

    let newString = noSpaces.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")

    return `#${newString}`.length > 140 || !newString ? false : `#${newString}`

}
console.log(generateHashtag(" Hello there thanks for trying my Kata"))
console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag("Do We have A Hashtag"))