// given an array of two numbers, split out the numbers from lowest to highest and add them up

const sumAll = arr => {
// sort the array to make sure the lowest number is always first
    let newArr = arr.sort((a,b)=> a-b);

    let lowN = newArr[0],
        highN = newArr[1],
        result = 0;
    
    if (lowN < highN) {
        for(i = lowN; i <= highN; i++ ) {
        result += i;
        }
    }
    console.log(result);
  
// sum just the inside numbers: return (result - arr[0])- arr[1];
};
  
sumAll([6 , 2]); // 2+3+4+5+6 = 20
sumAll([10, 2]);