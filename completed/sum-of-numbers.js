// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
    if (a === b) {
        return a
    } else if (a < b) {
        let numArray = []
        for (let i = a; i <= b; i++) {
            numArray.push(i)
        }
        return numArray.reduce((acc, num) => {
            acc += num
            return acc
        }, 0)
    } else if (a > b) {
        let numArray = []
        for (let i = b; i <= a; i++) {
            numArray.push(i)
        }
        return numArray.reduce((acc, num) => {
            acc += num
            return acc
        }, 0)
    }
}
console.log(getSum(1, 0)) // 1
console.log(getSum(1, 2)) // 3
console.log(getSum(0, 1)) // 1
console.log(getSum(-1, 0)) // -1
console.log(getSum(-1, 2)) // 2
console.log(getSum(1, 1)) // 1

// (-1, 2)
// round 1: i = -1
// round 2: i = 0
// round 3: i = 1
// round 4: i = 2

// (3, 0)
// i + (i + 1)
// round 1: i = 0
// round 2: i = 1
// round 3: i = 2
// round 4: i = 3