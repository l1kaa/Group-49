const child = document.getElementById('child');

let x = 0;
let y = 0;
moveAmount = 5

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){
    
        event.preventDefault();
    
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;   
            case "ArrowRight":
                x += moveAmount
                break
            case "ArrowLeft":
                x -= moveAmount;
                break
        }
    
        child.style.top = `${y}px`;
        child.style.left = `${x}px`;
    }
})