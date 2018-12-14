// Using the spread operator will “spread” the array passed to the function and the Math.min() method will pick out the smallest number, including negative numbers.

function findSmallestInt(args){
     let output = Math.min(...args);
     console.log(output);
};

findSmallestInt([55,22,4,33])