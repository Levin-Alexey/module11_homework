function numberInterval(num1, num2) {
    let IntervalId = setInterval (function () {
        console.log(num1++);
        if (num1 > num2) clearInterval(IntervalId);
    }, 1000)
}

numberInterval(5, 15);

