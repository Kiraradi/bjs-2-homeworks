// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    max = arr[i] > max ? arr[i] : max;
    min = arr[i] < min ? arr[i] : min;
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  // Ваш код
  sum = 0;
  for (let i = 0 ; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for ( let i = 1; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    max = sum > max ? sum : max;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max, min, difference;
  min = Math.abs(arr[0]);
  max = Math.abs(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    max = Math.abs(arr[i]) > max ? Math.abs(arr[i]) : max;
    min = Math.abs(arr[i]) < min ? Math.abs(arr[i]) : min;
  }
  difference = max - min;
  return difference;

}
