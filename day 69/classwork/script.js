//შექმენით ცვლადი სადაც შეინახავთ ახლანდელ Date'ს

const currentDate = new Date();
console.log(currentDate);

//ჯერ გამოიტანეთ ეს ცვლადი, შემდეგ კი გამოიყენეთ და გამოიტანეთ ყველა მეთოდი რომელიც რესურსებშია ჩაგდებული

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()); 
console.log(currentDate.getDate()); 
console.log(currentDate.getDay()); 
console.log(currentDate.getHours()); 
console.log(currentDate.getMinutes()); 
console.log(currentDate.getSeconds()); 
console.log(currentDate.getMilliseconds()); 

//გააკეთეთ დროის ამთვლელი პროგრამა, html + js'ით, ისეთი როგორიც მე გავაკეთე

const myp = document.getElementById("myp");

setInterval(() => {
    const date = new Date();

    myp.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)