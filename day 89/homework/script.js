// ### 1. **Create a Class with Public Properties**
//    - Define a `Car` class with public properties `make` and `model`. Create an instance and access these properties.

class Car{
    constructor(year, model){
        this.year = year;
        this.model = model;
    }

    displayCar(){
        console.log(`This is a ${this.year} ${this.model}`)
    }
}

const car1 = new Car(2009, "Ferrari")
car1.displayCar()


// ### 2. **Use Private Properties**
//    - Define a `BankAccount` class where `balance` is a private property. Implement a public method to deposit and withdraw money from the account.

class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
    depositMoney(){
        console.log(`Are you sure you want to deposit ${this.balance} from your personal accout?`);
        console.log(`${this.balance} widthdrawal successful.`);
    }
}

// ### 3. **Static Methods and Properties**
//    - Create a `MathOperations` class with a static method `add()` that adds two numbers. Also, define a static property `PI` representing the value of Pi.

class MathOperations{
    static PI = 3.1415;
    static add(a, b){
        return (a + b) * PI
    }
}

console.log(MathOperations.PI)
console.log(MathOperations.add(1500, 200))

// ### 4. **Use Getters and Setters**
//    - Define a `Rectangle` class with properties `width` and `height`. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.

// ### 5. **Private Methods**
//    - Create a `User` class where a private method `validatePassword()` checks the strength of the password. The method should only be used internally when setting a password.

// ### 6. **Private Properties with Getters and Setters**
//    - Define a `Book` class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.

// ### 7. **Static Method for Instance Counting**
//    - Create a `Player` class where each time an instance is created, a static method `getPlayerCount()` keeps track of how many players have been created.

// ### 8. **Class Inheritance with Private Properties**
//    - Create a `Vehicle` class with private properties like `speed`. Then, create a `Bike` subclass that can access public methods to modify or retrieve the speed.

// ### 9. **Static Method for Comparison**
//    - Define a `Student` class with a static method `compareGrades(student1, student2)` that compares the grades of two student instances.

class Student{
    static compareGrades(student1, student2){
        return student1 > student2
    }
}

console.log(Student.compareGrades(100, 90))

// 10. უყურეთ დღევანდელ ჩანაწერს