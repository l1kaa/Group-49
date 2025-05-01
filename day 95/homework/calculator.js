function calculator(x, y, operator){
    if(y == 0){
        return "Zero Division Error";
    }
    else if (operator == "+"){
        return x + y;
    }
    else if (operator == "-"){
        return x - y;
    }
    else if (operator == "*"){
        return x * y;
    }
    else if (operator == "/"){
        return x / y;
    }
    else{
        return "Invalid operator. Try again";
    }
}

module.exports = {calculator};