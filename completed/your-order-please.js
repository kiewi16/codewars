// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
    if (words) {
        const regex = /[1-9]/g
        const found = words.match(regex)
        let arrayOfNums = found.map(number => {
            return parseInt(number)
        })
        const cleanWords = words.split(" ")

        let wordsInOrder = []
        for (let n = 1; n < 10; n++) {
            for (let k = 0; k < arrayOfNums.length; k++) {
                if (arrayOfNums[k] === n) {
                    wordsInOrder.push(cleanWords[k])
                }
            }
        }
        return wordsInOrder.join(" ")
    } else {
        return words
    }
}
console.log(order("is2 Thi1s T4est 3a"))
console.log(order(""))