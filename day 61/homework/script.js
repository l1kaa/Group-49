// alert(30 < 50);
// alert(67 < 100);
// alert(5 < 0);   
// alert(227 < 90);
// alert(239 < 0.9)

// alert(19*0 > -1);
// alert(3 * 7 > 20);
// alert(4 * 4 > 16);
// alert(17 > 134);
// alert(19*1 > 1);

//The confirm() box asks the user to accept or reject something. Similar to alert() and prompt(), the box takes the focus away from the current window, and forces the user to read the message.


let x = confirm("Are you an adult?")
if (x){
    alert("You are an adult")
}else{
    alert("You aren't an adult")
}
