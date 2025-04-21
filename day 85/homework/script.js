// 2) შექმენით 5 ელემენტიანი მასივი და მისი თითეული ელემენტი შეინახეთ ცვლადში, დესტრუქციის მეშვეობით

const arr = [10, 20, 30, 40, 50];
const [one, two, three, four, five] = arr;

console.log(one); 
console.log(two); 
console.log(three); 
console.log(four); 
console.log(five); 


// 3) შექმენით ობიექტი მინიმუმ სამი კუთვნილებით და მისი თითეული კუთვნილება შეინახეთ ცვლადში, დესტრუქციის მეშვეობით

const person = {
    name: "Lika",
    surname: "Chkhikvadze",
    position: "Mentor",
};

const { name, surname, position } = person;

console.log(name); 
console.log(surname); 
console.log(position); 

// 4) კომენტარებით ახსენით რა არის rest/spread ოპერატორები და რა განსხვავებაა მათ შორის.

// spread ოპერატორი ძირითადად გამოიყენება მასივებთან, ხშირ შემთხვევაში მათი დესტრუქციისთვის.
// rest ოპერატორი კი ძირითადად დესტრუქციაში სხვა დარჩენილი ელემენტების მოსაპოვებლად.

// როდესაც rest ოპერატორს ვიყენებთ, ელემენტების რაოდენობა არ ვიცით.


// 5) შექმენით ფუნქცია, რომელსაც გადაეცემა n რაოდენობის რიცხვი, ამ ფუნქციამ უნდა დააბრუნოს გადაცემული რიცხვების ჯამი. გამოიძახეთ ის რამოდენიმეჯერ და ყოველ ჯერზე არგუმენტად გადაეცით სხვადასხვა რაოდენობის რიცხვი.

const sumOfNums = (...numbers) => {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += i;
}
}
console.log(sumOfNums(1, 2, 3, 4, 5))
console.log(sumOfNums(27, 25, 113))

// 6) შექმენით 10 ელემენტიანი მასივი და დააკოპირეთ იგი spread ოპერატორის გამოყენებით.

const arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const copiedArr2 = [...arr2];

console.log(copiedArr2); 

// 7) შექმენით ობიექტი მინიმუმ ხუთი კუთვნილებით. თქვენი დავალებაა დესტურქციის გამოყენებით პირველი ორი კუთვნილება შეინახოთ ცვლადებში, ხოლო დანარჩენი კუთვნილებები ახალი ობიექტის სახით(დაგჭირდებათ spread ოპერატორი)

const aboutMe = {
    name: "Lika",
    surname: "Chkhikvadze",
    favColor: "Black",
    hair: "Brown",
    hobby: "Coding"
};

const {name2, surname2, ...restInfo} = aboutMe;