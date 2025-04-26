document.addEventListener("DOMContentLoaded", function () {

    let balance = document.getElementById("balance")
    let amount_dep = document.getElementById("deposit")
    let amount_w = document.getElementById("withdrawal")
    let submit = document.getElementById("submit")


    class BankAccount{
        #balance
        constructor(balance){
            this.#balance = balance;
        }

        deposit(amount_dep){
            if (amount_dep> 0){
                this.#balance += amount_dep;
                console.log(`Deposited ${amount_dep}$, New Balance: ${this.#balance}$`);
            }
            else{
                console.log("Amount must be postive");
            }
        }

        withdraw(amount_w){
            if(amount_w > 0 && amount_w <= this.#balance){
                this.#balance -= amount_w;
                console.log(`Withdrew ${amount_w}$, New Balance: ${this.#balance}$`)
            }
            else if(amount_w <= 0){
                console.log("The amount of money You want to withdraw should exceed 0$")
            }
            else if(amount_w >= this.#balance){
                console.log("You don't have enough balance. You Can't proceed with the widthdrawal.")
            }
        }

        getBalance(){
            return this.#balance
        }
    }

    let account = null;

    submit.addEventListener("click", function(e) {
        e.preventDefault(); // Prevents form submission

        let balanceValue = parseFloat(balanceInput.value);
        let depositValue = parseFloat(amount_dep.value);
        let withdrawValue = parseFloat(amount_w.value);

        // Create the account once
        if (!account) {
            if (isNaN(balanceValue)) {
                alert("Please enter a valid starting balance.");
                return;
            }
            account = new BankAccount(balanceValue);
            console.log(`Bank account created with initial balance: ${balanceValue}$`);
        }

        // Perform deposit if valid
        if (!isNaN(depositValue) && depositValue > 0) {
            account.deposit(depositValue);
        }

        // Perform withdrawal if valid
        if (!isNaN(withdrawValue) && withdrawValue > 0) {
            account.withdraw(withdrawValue);
        }

        // Show updated balance
        console.log(`Current Balance: ${account.getBalance()}$`);
    });
});