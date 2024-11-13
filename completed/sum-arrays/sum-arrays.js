// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

function sum(numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sum([1, 5.2, 4, 0, -1]))

function sum2(numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sum2([]))