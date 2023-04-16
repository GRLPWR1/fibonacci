// Итерационный подсчет n-го числа Фибоначчи
const getFibonacciIter = (num) => {
    let fibonacciSequence = ['Введите целое число больше ноля', 0, 1];
    let newValue;
    for(let i = 3; i <= num; i++) {
        newValue = fibonacciSequence[i-1]+fibonacciSequence[i-2];
        console.log(newValue);
        fibonacciSequence.push(newValue);
        console.log(fibonacciSequence);
    }
    return fibonacciSequence[num];
}

console.log(`Итеративный метод. Число в последовательности Фибонначи по заданному индексу: `+getFibonacciIter(20));

// Рекурсивное вычисление n-го числа Фибоначчи

const getFibonacciRec = (num) => {
    let firstValue = 0;
    let secondValue = 1;
    let soughtValue;
    if (num <= 0) {
        return prompt('Введите целое число больше ноля');
    } else if (num == 1) {
        return firstValue;
    } else if (num == 2) {
        return secondValue;
    } else {
        soughtValue = getFibonacciRec(num-1) + getFibonacciRec(num-2);
        return soughtValue;
    }
}

console.log('Рекурсивный метод. Число в последовательности Фибонначи по заданному индексу: ' + getFibonacciRec(8))

module.exports = {
    getFibonacciIter,
    getFibonacciRec
}
