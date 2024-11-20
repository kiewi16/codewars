// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// age, handicap
// delcare a variable called member list and assign it to an empty array
// use a for loop to iterate over the array of sub arrays
    /// use a for loop to iterate over the numbers within the sub arrays
    // if element at index 0 is greated than or equal to 55 and element at index 1 is greater than 7, push senior to membership list
    // else push open 

function openOrSenior(data) {
    let memberList = []
    for (let i = 0; i < data.length; i++) {
        let age = data[i][0]
        let handicap = data[i][1]
        if (age >= 55 && handicap > 7) {
            memberList.push("Senior")
        } else {
            memberList.push("Open")
        }
    }
    return memberList
}
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

function openOrSenior2(data) {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? "Senior" : "Open")
}
console.log(openOrSenior2([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

// data.map() iterates over each sub-array in the data array. Each sub-array contains two elements: an age and a handicap.
// ([age, handicap]) is the destructing syntax. For each sub-array, it "unpacks" the values into two variables: age and handicap.
// This allows you to use age and handicap directly in the arrow function.