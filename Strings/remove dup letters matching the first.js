const sillyString = (str) => {
  
    // reserve the first letter of the string.
    let capLetter = str.charAt(0);
    
    // change the string into an array and make it lower case
    let wordarray = str.toLowerCase().split('');
    
    // take the first letter to use in the filter
    let firstletter = wordarray[0];
    let filteredArr = wordarray.filter(wordarray => wordarray[0] !== firstletter);

    // add back the first capital letter
    filteredArr.unshift(capLetter);
    
    let stringOut = filteredArr.join("");

    console.log('look', stringOut);
  }

sillyString('Alejandra');
sillyString('hehlhlhoh');