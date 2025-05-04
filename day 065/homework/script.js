//შექმენით Object Constructor ნებისმიერ რამეზე რომელსაც ექნება 5 property 

const obj1 = {
    favColor : "Black",
    favDrink : "Water",
    post1 : "English mentor",
    post2: "Mentor's assistent",
    post3: "Leader"
}

console.log(obj1)

//შექმენით Object Constructor მოტოებზე, უნდა ჰქონდეს 4 property და ერთ-ერთი უნდა იყოს მეთოდი

function Motorcycle(brand, name, color, method){
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.method = method;
}

function switchColor(){
    this.color = "Blue"
}

const Motorcycle1 = new Motorcycle("Yamaha", "Yamaha motor R9", "Black", switchColor)
console.log(Motorcycle1)