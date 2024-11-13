// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if (num > 0) {
        return num - (num * 2)
    } else {
        return num
    }
  }
console.log(makeNegative(42))

function makeNegative2(num) {
    return num > 0 ? num * -1 : num
}
console.log(makeNegative2(42))