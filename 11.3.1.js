function sumNumberAndFunc(num) {
    return function SumNumberFunc(numFunc) {
        return num + numFunc;
    };
}

let result = sumNumberAndFunc(10);

console.log(result(5));
console.log( sumNumberAndFunc(1)(2), sumNumberAndFunc(2)(2), sumNumberAndFunc(3)(3) );

/*function getFirstNum(num) {
    return num;
}

function sumNumbers (num2, fun){
    res = num2 + fun;
    return res;
}

result = sumNumbers(6, getFirstNum(2))

console.log(result)*/

