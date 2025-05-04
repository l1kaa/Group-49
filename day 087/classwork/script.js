const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const user = {
        name,
        email,
        age
    };

    
    let amount = 1;
    while (localStorage.getItem('user' + amount)) {
        amount++;
    }

    localStorage.setItem('user' + amount, JSON.stringify(user));
    form.reset();
    });