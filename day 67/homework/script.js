// 1)შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ამ რიცხვების ჯამს

function sumArr(Arr){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
    }

console.log(sumArr([720, 54, 90 ,4 ,14]))


// 2)შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს მის მინიმალურ და მაქსიმალურ მნიშვნელობებს.

function minMax(arr){
    let minNum = arr[0]

    for(let i = 0; i < arr.length; i++){
        if (arr[i] < minNum){
            minNum = arr[i]
        }
    }
}

    let maxNum = arr [0]
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > maxNum){
            maxNum = arr[i]
        }
    }

return [minNum, maxNum]


// 3)დაწერეთ ფუნქცია, რომელიც შექმნის N სიგრძის მასივს შემთხვევითი რიცხვებით (1-100 შუალედში).
function randomArr(){
    let num1 = Math.ceil(Math.random() * 100)
    let num2 = Math.ceil(Math.random() * 100);
    const arr =  [];

    for(let i = Math.min(num1,num2); i < Math.max(num1,num2); i++){
        arr.push(i)
    }
    return arr
}

// 4)შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ახალ მასივს, სადაც ყველა ელემენტი იქნება მისი კვადრატი.
function square(arr){
    const newArr = [];

    for(let i = 0; i < arr.lenght; i++){
        newArr.push(arr[i] * arr[i])
    }
    return newArr;
}


// 5)დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის:

// Math.floor() გამოყენებით დამრგვალებულ მნიშვნელობას
// Math.ceil() გამოყენებით დამრგვალებულ მნიშვნელობას
// Math.round() გამოყენებით დამრგვალებულ მნიშვნელობას

function math(num){
    return Math.floor(num), Math.ceil(num), Math.round(num)
}