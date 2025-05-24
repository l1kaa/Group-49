// 1) ახსენით რა არის promise

// promise არის ობიექტი, რომელიც ვიზუალურად გვანახებს გარკვეული მოვლენის გაშვების / არ-გაშვების პროცესს.


// 2) შექმენით promise რომელიც აresolveბს (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე) 

function getProduct() {
    const Mypromise =  Promise((resolve, reject) => {
    console.log("getting information about the product");
    
    setTimeout(() => {
        const info = { 
            status: "In stock",
            amount: 200
        };
        resolve(info);

    }, 1000); 
});
}

getProduct()
    .then((response) => {
    console.log(response);
})

// 3) შექმენით promise რომელიც აrejectებს (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე) 

function getProductError() {
    const Mypromise =  Promise((resolve, reject) => {
    console.log("getting information about the product");
    
    setTimeout(() => {
        reject("Error. The product is out of stock.");

    }, 1000); 
});
}

getProductError()
    .catch((reject) => {
    console.error(reject);
});

// 4) შექმენით promise რომელიც ან აresolveბს ან აrejectებს, გარკვეული პირობის მიხედვით (ფუნქციაში გამოიყენეთ setTimeout რადგან ჰქონდეს ნამდვილი სერვერიდან ინფორმაციის წამოღების სახე)

const products = {
    PC: 1500,
    Headphones: 100,
    mousePad: 280
}

function executor(resolve, reject){
    setTimeout(() => {
        if(products.PC > 0){
            resolve("The PC order has processed.")
    }
        else{
            reject("Product is out of stock.")
    }
    },200);

}

const orderPromise = new Promise(executor);

orderPromise
    .then((response) => {
    console.log(response);
})
    . catch((reject) => {
    console.error(reject);
});