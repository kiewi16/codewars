// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// .split(/[-_]/) to return an array of substrings that are split by dash (-) and underscore (_)
// use a for loop to iterate through the array of substrings and capitalize the first letter of all strings between index position 1 and the .length() of the array of substrings.
    // for (let i = 1; i < array.length; i++)
    // the word at index position position 0 should only be capitalized if the original word was capitalized. Based on the for loop, the first letter in the word at index position 0 will not be modified (it will appear as it was in the original string).
        // to modify the first letter in the second word, array[i][0].toUppercase()
// .join() to join the modified substrings into a single string 

let string = "the-stealth-warrior"
let string2 = "The_Stealth_Warrior"
let string3 = "The_Stealth-Warrior"

function toCamelCase(string) {
    let array = string.split(/[-_]/)
    let newArray = [array[0]]
    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i][0].toUpperCase() + array[i].slice(1))
    }
    return newArray.join("")
}
console.log(toCamelCase(string))
console.log(toCamelCase(string2))
console.log(toCamelCase(string3))

function toCamelCase2(string) {
    let array = string.split(/[-_]/);    
    for (let i = 0; i < array.length; i++) {
        if (i > 0) {
            array[i] = array[i][0].toUpperCase() + array[i].slice(1);
        } else {
            array[i] = array[i];
        }
    }   
    return array.join('');
}
console.log(toCamelCase2(string))
console.log(toCamelCase2(string2))
console.log(toCamelCase2(string3))