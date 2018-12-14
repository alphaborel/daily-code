// Takes one number and returns True or False depending on if it is Prime or not
// This function also tells you all the divisors for a number.

function isPrimeNumber(num) {

    let p = 2;
    let count = 0;
    
    while (p < num) {
        if (num % p === 0) {
                count++;
                console.log('false, divisible by', p);
            }
        p++
    }

    if (count === 0 ) {
        console.log('true, prime number')
    }
}

isPrimeNumber(2255);