// Instructions
// Output
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if (!text || n < 0) {
        return text
    }

    for (i = 0; i < n; i++) {
        let evenIndexes = []
        let oddIndexes = []

        for (let k = 0; k < text.length; k++) {
            if (k % 2 === 0) {
                evenIndexes.push(text[k])
            } else {
                oddIndexes.push(text[k])
            }
        }
        text = oddIndexes.join("") + evenIndexes.join("")
    }
    return text
}

function decrypt(encryptedText, n) {
}

console.log(encrypt("012345", 1))
console.log(encrypt("012345", 2))

console.log(decrypt("135024", 1))
console.log(decrypt("304152", 2))