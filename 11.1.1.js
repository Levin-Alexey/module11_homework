let arrNumbers = [44, 20, 11, 10, 12, 14, 16, 'JS', 0 , null];

function getSumOddAndEven(arr) {
    let zero = 0;
    let odd = 0;
    let even = 0;
    let other = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero = zero + 1;
            } else if (arr[i] % 2 === 0) {
                even = even + 1;
            } else if (arr[i] % 2 !== 0) {
                odd = odd + 1;
            }
        }
        else {
            other = other+1;
        }

    }

    console.log('Четных - '+ even + ' Не четных - ' + odd + ' Нулевых объектов - ' + zero + ' Других объектов - ' + other)
}

getSumOddAndEven(arrNumbers);