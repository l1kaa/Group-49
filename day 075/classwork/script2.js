

const child = document.getElementById("child");

let left = 0;
let y = 0;
let direction = "down";

const move = setInterval(function(){
    if(direction == "down"){
        y++;
        if(y == 450){
            direction = "right";
        }
    } else if(direction == "right"){
        left++;
        if(left == 450){
            direction = "up";
        }
    } else if(direction == "up"){
        y--;
        if(y == 0){
            direction = "left";
        }
    } else{
        left--;
        if(y == 0 && left == 0){
            direction = "down";
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 5);