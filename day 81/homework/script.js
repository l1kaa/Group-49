const regForm = document.getElementById("register");
const loginForm = document.getElementById("login");
const usersDiv = document.getElementById("users-data");

const admin = {
    username: "Lika",
    email: "likachxikvadze@gmail.com",
    password: "12345",
    isAdmin: true
}

let users = JSON.parse(localStorage.getItem("users")) || [admin];
localStorage.setItem("users", JSON.stringify(users));

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

function Account(username, email, password) {
    return { username, email, password };
}

const handleRegister = () => {
    for(const user of users) {
        if(user.email === regForm.email.value) {
            alert("Email is already registerd");
            return;
        }
    }

    const username = regForm.username.value;
    const email = regForm.email.value;
    const password = regForm.password.value;

    users.push(new Account(username, email, password));
    setLocalStorage("users", users);
    console.log(users);
    alert("Register successfully");
    regForm.reset();
}

const handleLogIn = () => {
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    for(const user of users) {
        if(user.email === email && user.password === password) {
            usersDiv.innerHTML = "";
            if(user.isAdmin) {
                renderAllUsers(user);
            } else {
                renderUser(user);
            }
            loginForm.reset();
            return;
        }
    }

    alert("User not found");
}

regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleRegister();
})

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleLogIn();
})