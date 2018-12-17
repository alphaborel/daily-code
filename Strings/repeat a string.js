
// Using new repeat() method from ECMA 6:

const repeatStringNumTimes = (str, num) => {
 if (num <= 0) {
   return("");
   } else {
   let answer = str.repeat(num); // a new method? Is this cheating for this problem? :3
   console.log(answer);
 }
}

repeatStringNumTimes("abc", 3);


// Stand alone method:

function repeat(pattern, count) {
    if (count < 1) return '';
    var result = '';
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    console.log(result + pattern);
}

repeat('Test', 3)