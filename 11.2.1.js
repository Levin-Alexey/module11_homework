function isPrime(num) {
    if (num > 1000) {
        return console.log("Данные неверны");
    }
    if (num == 1) {
        return console.log("Вы ввели 1");
    }
    if (num == 0) {
        return console.log("Вы ввели 0");
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return console.log("Число составное");
        } else if (num % i !== 0) {
            return console.log("Число простое");
        }
    }
}

isPrime(0)