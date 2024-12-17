const { subscribe } = require('diagnostics_channel');
const fs = require('fs');
const text = fs.readFileSync('most-frequently-used-words.input.txt', 'utf-8')

const text2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
const text3 = "  //wont won't won't"
const text4 = ""
const text5 = "a a a  b  c c  d d d d  e e e e e"
const text6 = "  '  "

// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
//  Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
//  Matches should be case-insensitive, and the words in the result should be lowercased.
//  Ties may be broken arbitrarily.
//  If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

// transform string into an array using split
    // split by #, \, /, .
    // apostrophes are part of the word

function topThreeWords(text) {
    let words = text.toLowerCase().split(/[^a-z']+/).filter(word => word && word !== "'")
    let newObject = words.reduce((acc, word) => {
        !acc[word] ? acc[word] = 1 : acc[word] ++
        return acc
    }, {})
    return Object.entries(newObject).sort((a, b) => b[1] - a[1]).slice(0, 3).map(subarray => subarray[0])
}
console.log(topThreeWords(text))
console.log(topThreeWords(text2))
console.log(topThreeWords(text3))
console.log(topThreeWords(text4))
console.log(topThreeWords(text5))
console.log(topThreeWords(text6))