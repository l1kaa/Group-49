// 1. Filter Prime Numbers
//    - Create an array of numbers and use `filter()` to return only the prime numbers.


function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 20];

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers);


