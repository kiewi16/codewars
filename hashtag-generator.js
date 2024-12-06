// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// input: string

// output: 
    // if the final result is longer than 140 chars, return false
    // if the input or the result is an empty string, return false
    // otherwise return string with # added as the first character with the first letter capitalized 

    // note: all spaces must be removed from the original string. The 140 char count is completed AFTER the spaces have been removed.

function generateHashtag(string) {
    let newString = []
    string.split(" ").forEach(char => char === "" ? null : newString.push(char))

    
    
    // let newHashtag = newString.join("")

    // return newHashtag.length > 140 || newHashtag === "" ? false : `#${newHashtag}`    
}
console.log(generateHashtag(" Hello there thanks for trying my Kata"))
console.log(generateHashtag("    Hello     World   "       ))
console.log(generateHashtag("Do We have A Hashtag"))