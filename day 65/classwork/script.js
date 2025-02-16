// განსხვავაებები:
//  Python-სგან განსხვავებით, js-ში ობიექტის ცვლადის შესაქმნელად ვიყენებთ const keyword-ს. python-ში dictionary-ში ჩასმულ key-ებს ვწერთ ბრჭყალებში, js-ში კი ვწერთ ბრჭყალების გარეშე.

//მსგავსებები:
// ორივეგან მინიჭების ოპერატორს, ფიგურულ ფრჩხილებსა და ორწერტილს ვიყენებთ. ასევე value-ებს ორივეგან ბრჭყალებში ვათასებთ.


//2) შექმენით რაიმე ობიექტი რომელსაც ექნება 3 property და ერთ-ერთი იქნება რაიმე მეთოდი
const obj1 = {
    name : "Lika",
    favColor : "Black",
    level : 65,
    plusLevel: function(){
        this.level ++;
    }
}
console.log(obj1)
console.log(obj1.level)


//3) ახსენით რა განსხვავებაა ფუნქციასა და მეთოდს შორის (დეტალურად)
// ფუნქციის გამოყენება შესაძლებელია თითქმის ყველა მონაცემთა ტიპზე(ესეც გარკვეულწილად ფუნქციის ტიპზეა დამოკიდებული). ხოლო მეთოდების გამოყენება განკუთვნილია ცალკეული მონაცემთა ტიპებისთვის.

// 4) შექმენით person Object Constructor 3 property'ით
function Person(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

const person1 = new Person("Lika", 15, "Black")

//5) შექმენით მანქანის Object constructor რომელსაც ექნება 5 property, აქედან ერთერთი აუცილებლად უნდა იყოს horsePower და კიდევ ერთი აუცილებლად მეთოდი რომელიც ამ horsePower'ს გაზრდის 100'ით
function Car(name, engine, color, horsePower, method){
    this.name = name;
    this.engine = engine;
    this.color = color;
    this.horsePower = horsePower;
    this.method = method;
}
function incrementHorsePower(){
    this.horsePower += 100
}

const car1 = new Car("La Ferrari", "V12", "red wine", 1184, incrementHorsePower)

console.log(car1)