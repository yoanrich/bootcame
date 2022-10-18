// inputan array positif
// tentukan bilangan prima 
// funcion 

let num = [2, 3, 6, 8, 6, 1, 5];
let result = [];

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}
// console.log(isPrime(3));
num.forEach(function (element) {
    const item = isPrime(element);
    if (item) {
        result.push(element);
    }
});



console.log(result);