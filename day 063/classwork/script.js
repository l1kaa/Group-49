//1) მომხმარებელს შემოატანინეთ რიცხვი და უთხარით მისი grade (ანუ თუ მაგალითად
//  90'დან 100'ის ჩათვლით ექნება ქულა გამოუტანეთ "Grade A", თუ 80'დან 89'ის ჩათვლით გამოუტანეთ "Grade B" და ა.შ)

const scoreInput = prompt("enter your score: ");
console.log(scoreInput)
if(100 <= scoreInput < 90 ){
    alert("Grade A");
} else if(89 <= scoreInput < 80 ){
    alert("Grade B");
} else if(70 <= scoreInput < 79 ){
    alert("Grade C");
} else {
    alert("Grade F");
}


// 2) მომხმარებელს შემოატანინეთ საკუთარი ასაკი, თუ იქნება 13 წელზე ნაკლების გამოუტანეთ You are kid, თუ იქნება 18 წელზე ნაკლების მაგრამ 13'ზე მეტის გამოუტანეთ You are not adult yet და თუ იქნება 18 წელზე მეტის გამოუტანეთ You are adult

const ageInput = prompt("enter your age: ")
console.log(ageInput)

if (ageInput < 13){
    alert("You are a kid.");
} else if(ageInput < 18 && ageInput > 13){
    alert("You are not an adult yet.");
} else if(ageInput > 18){
    alert("You are an adult.");
}

