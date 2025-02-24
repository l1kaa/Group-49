// თავიდან გააკეთეთ დროის ამთვლელი მოწყობილობა, რომელიც გამოიტანს მხოლოდ წუთებს და წამებს

const myp = document.getElementById("myp");

setInterval(() => {
    const date = new Date();

    myp.textContent = `${date.getMinutes()}:${date.getSeconds()}`
}, 1000)

//  setInterval'ის გამოყენებით შექმენით პროგრამა რომელიც დაიწყებს 0'იდან და ყოველ ნახევარ წამში გამოიტანს რიცხვებს (ყველა გამეორებაზე 1'ით გაიზრდება) როდესაც ეს ავა 15'ზე მაშინ გაჩერდეს setInterval

let i = 0
const interval = setInterval(() => {
    console.log(i);
    i ++;
    if(i >= 15){
        clearInterval(interval);
    }
}, 500)


//  გამოიტანეთ 3 ბრძანება:
// console.log(1)
// console.log(2)
// console.log(3)

// მაგრამ ისე ქენით რომ პროგრამის გაშვებიდან 1 წამში გამოიტანოს ჯერ 2'იანი, შემდეგ მეორე წამს გამოიტანოს 1'იანი და ბოლოს 3'იანი (გააკეთეთ setTimeout'ით)


setTimeout(() =>{
    console.log(2);
},1000)

setTimeout(() =>{
    console.log(1);
},2000)

setTimeout(() =>{
    console.log(3);
},3000)

