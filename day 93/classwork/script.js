// 1. მემკვიდრეობა – ცხოველის კლასი
// შექმენი კლასი `Animal`, რომელსაც ექნება მეთოდი `speak`. ამის შემდეგ შექმენი შვილი კლასი `Dog`, რომელიც გადაფარავს `speak` მეთოდს და დაბეჭდავს ძაღლის-specific ტექსტს.

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} is making a sound`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    speak(){
        super.speak()
        console.log(`${this.name} is barking`)
    }
}

const dog1 = new Dog("Pup");
dog1.speak()

// 2. სტატიკური მეთოდი – მომხმარებლის რაოდენობა
// შექმენი კლასი `User`, რომელიც ინახავს ყველა შექმნილი მომხმარებლის რაოდენობას. დაამატე სტატიკური მეთოდი, რომელიც აბრუნებს ამ რაოდენობას.

class User {
    static userCount = 0;  

    constructor(name) {
        this.name = name;
        User.userCount++;  
    }
}

const user1 = new User("Lika");
const user2 = new User("Luka");

console.log(User.userCount); 