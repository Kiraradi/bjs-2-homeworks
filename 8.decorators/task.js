function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  return function(...args)  {
    const hash = args.join(',');
    const objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    } else {
      if (cache.length >= 5) {
        cache.shift();
      }
      const result = func.call(this,...args);
      cache.push({ hash: hash, value: result });
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
}

function debounceDecoratorNew(func, delay) {
  // Ваш код
  let timeoutId = null;
  let flag = true;

  function debounceFunc(...args) {
    debounceFunc.allCount++;

    if (flag) {
      flag = false;
      debounceFunc.count++;
      func.call(this,...args);
      return;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      debounceFunc.count++;
      func.call(this,...args);
    }, delay);
  }

  debounceFunc.count = 0;
  debounceFunc.allCount = 0;
  return debounceFunc;
}

const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован так как следующий сигнал отменит предыдущий (300 - 0 < 2000)
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
  console.log(upgradedSendSignal.count); // было выполнено 3 отправки сигнала
  console.log(upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000)