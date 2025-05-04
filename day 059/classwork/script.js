const submit = document.getElementById('submit')
const form = document.getElementById('form')

submit.addEventListener("click", function(event){
    event.preventDefault();

    const name1 = form.ELEMENT_NODE.name;
    const email1 = form.ELEMENT_NODE.email;
    const password1 = form.ELEMENT_NODE.password;
})

console.log(name1.value)
console.log(email1.value)
console.log(password1.value)