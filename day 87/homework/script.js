// 1) გააკეთეთ rest operator'ის 3 მაგალითი

const aboutMe = {
    name: "Lika",
    surname: "Chkhikvadze",
    favColor: "Black",
    hair: "Brown",
    hobby: "Coding"
};

const {name2, surname2, ...restInfo} = aboutMe;


const fruits = ['apple', 'banana', 'orange', 'grape'];

const [firstFruit, ...restFruits] = fruits;
console.log(firstFruit); 
console.log(restFruits);

// 2) გააკეთეთ spread operator'ის 3 მაგალითი

const arr1 = [1, 2];
const arr2 = [3, 4];

const sum = [...arr1, ...arr2];
console.log(sum); 



const person = { name: "Lika", surname: "Chkhikvadze" };
const copyPerson = { ...person };

console.log(copyPerson);


const nums = [14, 24, 34, 54];
const copyOfNums = [...nums];

console.log(copyOfNums);

// 3) გააკეთეთ rest და spread ოპერატორების ერთად გამოყენების 1 მაგალითი

const numbers = [10, 20, 30, 40, 50];

const [first, ...rest] = numbers;
const newArray = [first * 2, ...rest];

console.log(newArray);

// 4) ახსენით რა არის localstorage და რაში და როგორ ვიყენებთ

// local storage გამოიყენება იმისათვის რომ მომხმარებლის მიერ ვებსაიტზე შეტანილი ინფორმაცია ბრაუზერმა ადგილობრივად შეინახოს.