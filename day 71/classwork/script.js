// 1) წამოიღეთ ელემენტები getElementsByClassName'ის საშუალებით

let obj = document.getElementByClassName("h1");

// 2) წამოიღეთ ელემენტი querySelector'ის მეშვეობით (ჯერ id, შემდეგ class)

let obj2 = document.querySelector(".h1")
let obj3 = document.querySelector("#myp")

// 3) წამოიღეთ js'ში img და შეუცვალეთ: src და width

let changeImage = document.getElementsByTagName("img")
img.src = "./img1.jpg"; 
img.width = 500; 

// 4) წამოიღეთ js'ში p და შეუცვალეთ: color, backgroundColor და fontSize

let mypChange = document.getElementById("myp")
p.style.color = "blue"; 
p.style.backgroundColor = "black"; 
p.style.fontSize = "25px";


// 5) js'ის გამოყენებით, შექმენით ახალი p და textNode, შემდეგ textNode ჩასვით პარაგრაფში და პარაგრაფი ჩასვით html'ში მოცემულ div'ში

let p = document.createElement("p")
let textNode = document.createTextNode("New text")

let div = document.getElementById("div1")

p.appendChild(textNode)
div.appendChild(p)

