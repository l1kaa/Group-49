// 1) შექმენით ფორმა, შემდგარი მინიმუმ სამი input-ის. მომხმარებელს შემოატანინეთ სრული სახელი, ემაილი და პაროლი. შემოტანილი მონაცემები გამოიტანეთ საიტზე.

// მაგალითი:
// <h1>User Data</h1>
// <p>Fullname: #{fullname}</p>
// ...

document.getElementsByTagName("form").addEventListener("submit", function(){
    let Username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let submit = document.getElementById("submit").value;
    
    document.getElementById("fullname-value").textContent = `Fullname ${Username}`
    document.getElementById("email-value").textContent = `email: ${Username}`
    document.getElementById("password-value").textContent = `Password ${Username}`


})
