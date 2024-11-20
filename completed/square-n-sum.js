// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

function squareSum(numbers) {
    let squaredNums = numbers.map(num => num * num)
    let total = squaredNums.reduce((acc, number) => {
        return acc += number

    }, 0)
    return total
}
console.log(squareSum([1,2,2]))

function squareSum2(numbers) {
    return numbers.map(num => num * num).reduce((acc, number) => {
        return acc += number

    }, 0)
}
console.log(squareSum2([1,2,2]))