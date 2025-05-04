//1) გაიხსენეთ როდის გამოვიდა ES6 და მოიყვანეთ მაგალითები თუ რა updateბი შემოიტანა, ასევე ახსენეთ რაში გამოგვადგა ეს updateები

// ES6 გამოვიდა 2015 წელს. როდესაც იგი გამოვიდა, Javascript-ში დაემატა ისეთი update-ები როგორიცაა:
// let keyword, const keyword, Math metods, for, of, maps და ა.შ
// ეს update-ები გადვეხმარა Js კოდის გამატრივებაში.

// 2) ახსენით რატომ ჯობია let და const, var Keyword'ს
// let და const, var Keyword-ს ჯობია, რადგან var-ს გააჩნია global scope. რომელიც საშუალებას გვაძლევს ფუნქციაში შექმნილი ცვლადი ფუნქციის გარეთ გამოვიყენოთ. ერთი შეხედვთ ეს კარგი რამაა, თუმცა იგი პირიქით გაართულებს კოდის წერის პროცესს და გამოიწვევს ბევრ ერორს ჩვენს js კოდში.

// 3) გამოიყენეთ for...of loop

const nums = [1, 2, 4, 6, 68, 29];

for(let n of nums){
    console.log(n);
}

// 4) გამოიყენეთ for...in loop

const obj = {
    num1: 1,
    num2: 2,
    num3: 3
}

for(let i in obj){
    console.log(i);
}

// 5) გამოიყენეთ Object.assign() მეთოდი და ახსენით როგორ მუშაობს
const obj1 = {
    name: "Lika",
    status: "student",
    Group: 49
}

const obj2 = {
    name: "Lika",
    status: "Assistent",
    Group: 66
}

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// Object.assign() მეთოდის გამოყენებისას, თუ მოცემულ ობიექტებში ერთნაირი key-ები გვაქვს, ბოლოს არგუმენტად გადაცემული ობიექტში არსებული key-ს მნიშვნელობა გადაეწერება თავდაპირველად არგუმენტად გადაცემული მსგავსი key-ს მნიშვნელობას.

// 6) შექმენით ფუნქცია arrow function'ის გამოყენებით

const func = (a, b) =>{
    return a * b;
}