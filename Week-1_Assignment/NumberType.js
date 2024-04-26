function numberValidation(num) {
    if(num > 0){
        console.log("The given number", num ," is positive");
    } else if (num < 0){
        console.log("The given number", num ," is negative");
        //num = 0
    } else {
        console.log("The given number", num ," is zero");
    }
}

//var num = 10;
var num = -5;
numberValidation(num);