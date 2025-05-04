// bubbling - ის დროს, ჯერ ხდება child -ელემენტის გამკლავება, შემდეგ კი parent-ის.
// capturing - კი bubbling ის შებრუნებული პროცესია.  ჯერ ხდება parent -ელემენტის გამკლავება, შემდეგ კი child-ის

const parent = document.getElementById("parent")
const child = document.getElementById("child-p")

//bubbling

parent.addEventListener("click", function (){
    console.log(parent) // parent-ის ობიექტი გამოვიტანე
},false)

child.addEventListener("click", function (){
    console.log(child) // აქ კი child-ის ობიექტი გამოვიტანე
},false)


//capturing

parent.addEventListener("click", function (){
    console.log(parent) 
},true)

child.addEventListener("click", function (){
    console.log(child) 
},true)