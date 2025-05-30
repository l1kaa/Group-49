const root = document.getElementById("root")

fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((res) => {
            root.innerHTML += `
            <div style = "border: 1px solid black;">
                <p>Title: ${res.title} </p>
                <p>Price: ${res.price} </p>
                <p>Description: ${res.description} </p>
                <img src="${res.image}" width=200>
            </div>`
        });
    