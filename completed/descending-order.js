// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// convert numbers to strings using num.toString()
// convert string to array of strings using .split()
// use .sort() to sort array in descending order
// use .join() to transform array of strings into single string
// convert string to integer using parseInt(string)

let number = 42145
let number2 =  145263
let number3 = 123456789

function descendingOrder(number) {
    let string = number.toString()
    let array = string.split("")
    let sortedArray = array.sort((a, b) => {
        return b - a
    })
   let newString = sortedArray.join("")
   return parseInt(newString)
}
console.log(descendingOrder(number))
console.log(descendingOrder(number2))
console.log(descendingOrder(number3))