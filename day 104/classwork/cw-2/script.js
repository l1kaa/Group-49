// const form = document.getElementById('form')
// const inp = document.getElementById('inp').value
// const submit = document.getElementById('submit-btn')

// const root = document.getElementById("root")

// fetch("https://www.googleapis.com/books/v1/volumes?q={searchTerm}")
//     .then((response) => response.json())
//     .then((res) => {
//             root.innerHTML += `
//             <div style = "border: 1px solid black;">
//                 <p>Title: ${res.title} </p>
//                 <p>Year: ${res.price} </p>
//                 <p>Description: ${res.description} </p>
//                 <p>Pages Amount: ${res.pageCount} </p>
//                 <img src="${res.image}" width=200>
//             </div>`
//         });


const form = document.getElementById('form');
const inp = document.getElementById('inp');
const root = document.getElementById("root");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const searchTerm = inp.value
    root.innerHTML = ""; 


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((response) => response.json())
        .then((res) => {

            res.items.forEach(item => {

                root.innerHTML += `
                    <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                        <p>Title: ${res.title}</p>
                        <p>Year:${res.publishedDate}</p>
                        <p>Description: ${res.description}</p>
                        <p>Pages: ${res.pageCount}</p>
                        <img src=${res.imageLinks?.thumbnail}" width="150">
                    </div>
                `;
            });
        })
});