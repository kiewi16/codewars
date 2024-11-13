// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// input: string
    // declare a function
    // declare a variable called dnaArray and use split to convert input string to an array of letters
    // declare a variable called rna and assign it to an empty array
        // use forEach() to iterate over the array
            // if letter does not equal to "T", push letter to the newString array
            // if letter is strictly equal to "T", push "U" to the newString array
    // use join to convert array of letters into a single string
// output: string with all "T" converted to "U"

let dna = "GCAT"

function DNAtoRNA(dna) {
    let dnaArray = dna.split("")
    let rna = []
    dnaArray.forEach(letter => {
        if (letter === "T") {
            rna.push("U")
        } else {
            rna.push(letter)
        }
    })
    return rna.join("")
}
console.log(DNAtoRNA(dna))

function DNAtoRNA2(dna) {
   return dna.replace("T", "U")
}
console.log(DNAtoRNA2(dna))

function DNAtoRNA3(dna) {
   return dna.split("T").join("U")
}
console.log(DNAtoRNA3(dna))

function DNAtoRNA4(dna) {
   return dna.split("").map(letter => letter === "T" ? "U" : letter).join('')
}
console.log(DNAtoRNA4(dna))