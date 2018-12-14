// Takes one number and returns True or False depending on if it is Prime or not
// Partially working. Line 12 always runs. Need to get it to only output for a prime.

function isPrimeNumber(num) {
    let p = 2
    while (p < num) {
        if (num % p === 0) {
            console.log('false, divisible by', p);
            } 
        p++
    }
    console.log('true prime number')
}

isPrimeNumber(8);