function compareArrays(arr1, arr2) {
  /*
  // Способ 1 
  let result = false;
  if (arr1.length == arr2.length && JSON.stringify(arr1) == JSON.stringify(arr2) ) { 
    result = true;
  } 
  */
 // Сбособ 2 
  let result = true
  if (arr1.length === arr2.length) {
    for (element of arr1) {
      if (arr1[element] !== arr2[element]) {
        result = false;
        
      }
    }
  } else {
    result = false;
  }
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(number => number > 0 && number % 3 === 0).map((item) => item *10);
  // Ваш код

  return resultArr; // array
}
