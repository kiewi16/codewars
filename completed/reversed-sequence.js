// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let sequence = []
    let number = n
    for (let i = 0; i < n; i++)
        if (i === 0) {
            sequence.push(n)
        } else {
            number --
            sequence.push(number)
        }
    return sequence
  }
  console.log(reverseSeq(5))

  const reverseSeq2 = n => {
     return Array.from({length: n}, (_, i) => n - i)
  }
  console.log(reverseSeq2(5))

  const reverseSeq3 = n => {
    const sequence3 = []
    for (let i = 0; i < n; i++) {
        sequence3.push(n - i)
    }
    return sequence3;
  }
  console.log(reverseSeq3(5))

  const reverseSeq4 = n => {
    let arr = []
    while (n > 0) {
        arr.push(n)
        n--
    }
    return arr
  }
  console.log(reverseSeq4(5))

  const reverseSeq5 = n => {
    let sequence5 = []
    for (i = n; i > 0; i--) {
        sequence5.push(i)
    }
    return sequence5
  }
  console.log(reverseSeq5(5))