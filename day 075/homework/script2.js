const child = document.getElementById('child');

let x = 0;
let y = 0;
moveAmount = 5

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){
    
        event.preventDefault();
    

        const moveDown = setInterval(() => {
            x += 1; 
            child.style.top = `${x}px`;
            if (x == 450){
            clearInterval(moveDown);
            const moveRight = setInterval(() => {
                y += 1; 
                child.style.left = `${y}px`;
                if (y == 450){
                    clearInterval(moveRight);
                    const moveUp = setInterval(() => {
                        x -= 1; 
                        child.style.top = `${x}px`;
                        if (x == 450){
                            clearInterval(moveUp);
                            const moveLeft = setInterval(() => {
                                y -= 1; 
                                child.style.left = `${y}px`;
                                if (y == 0){
                                    clearInterval(moveLeft);
                                }
                            }, 5)
                        }
                    }, 5)
                }
            }, 5)
    }    
}, 5)    
    }    
})