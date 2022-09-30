"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr =[];
  } 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь

  if (!checkNumbers(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (!checkNumbers(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (!checkNumbers(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  let today = new Date();
  let monthsNumbers = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth());
  let feeMonthly = (amount - contribution) * (percent/12 + ((percent / 12) / (Math.pow(1 + percent/12, monthsNumbers) - 1)));
  totalAmount = +(feeMonthly * monthsNumbers).toFixed(2);
  console.log(totalAmount);
  return totalAmount;
}

function checkNumbers (newNumbers) {
  return typeof +newNumbers === "number" && !isNaN(newNumbers);
}Ы