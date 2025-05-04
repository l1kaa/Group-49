// 3. პრივატული ველი – ბანკის ანგარიში**
// შექმენი კლასი `BankAccount` პრივატული ველით `balance`. დაამატე მეთოდები `deposit`, `withdraw` და `getBalance`, რომლებიც უზრუნველყოფენ ბალანსზე წვდომასა და განახლებას.

class BankAccount{
    #balance
    constructor(balance){
        this.#balance = balance;
    }

    deposit(amount){
        if (amount > 0){
            this.#balance += amount;
            console.log(`Deposited ${amount}$, New Balance: ${this.#balance}$`);
        }
        else{
            console.log("Amount must be postive");
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdrew ${amount}$, New Balance: ${this.#balance}$`)
        }
        else if(amount <= 0){
            console.log("The amount of money You want to withdraw should exceed 0$")
        }
        else if(amount >= this.#balance){
            console.log("You don't have enough balance. You Can't proceed with the widthdrawal.")
        }
    }

    getBalance(){
        return this.#balance
    }
}

bankAccount1 = new BankAccount(1200);
bankAccount1.deposit(100)
bankAccount1.withdraw(1200)
bankAccount1.getBalance()

bankAccount2 = new BankAccount(100);
bankAccount2.deposit(100)
bankAccount2.withdraw(300)
bankAccount2.getBalance()

// //კლასის კომპოზიცია – ავტორი და წიგნი
// შექმენი ორი კლასი: `Author` და `Book`. `Book` კლასში გამოიყენე `Author` როგორც ველი და დაამატე მეთოდი, რომელიც დაბეჭდავს წიგნის სათაურს და ავტორის სახელს.

class Author{
    #name
    constructor(name, age){
        this.#name = name;
        this.age = age;
    }
    get name(){
        return this.#name;
    }
}

class Book extends Author{
    constructor(name, age, bookName){
        super(name,age)
        this.bookName = bookName;
    }

    printInfo(){
        console.log(`Name of the author: ${super.name}, Name of the book: ${this.bookName}`);
    }
}

const book1 = new Book("Albert Camus", 50, "L'etranger")
book1.printInfo()


// მემკვიდრეობა + პრივატული ველი – თანამშრომელი და მენეჯერი**
// შექმენი კლასი `Employee` პრივატული ხელფასის ველით. მემკვიდრეობით შექმენი `Manager`, რომელსაც დაემატება ახალი ველი – `department`. დაამატე მეთოდი, რომელიც დაბეჭდავს სახელის, განყოფილების და ხელფასის ინფორმაციას.

class Employee{
    #salary
    #name
    constructor(name, salary){
        this.#name = name;
        this.#salary = salary;
    }

    get name() {
        return this.#name;
    }

    get salary() {
        return this.#salary;
    }
}

class Manager extends Employee{
    #departament
    constructor(name, salary, departament){
        super(name, salary)
        this.#departament = departament;
    }

    printInfo(){
        console.log(`Name of the employee: ${this.name}.`);
        console.log(`${this.#departament} departament`);
        console.log(`Salary amount: ${this.salary}$`)
    }
}

employee1 = new Manager("Dex", 1300, "Forensic blood spatter Analysis")
employee1.printInfo()