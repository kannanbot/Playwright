
function reverseString(str){
    // Convert the input into characters
    let char = str.split('');
    //Loop them in reverse direction
    for (let index = str.length-1; index >=0; index--) {
    //Concatenate the string
    
        reserved = reserved + char [index];
        
    }
    
    if(str == reserved){
        return true;
    }else{
        return false;
    }

}

let str = "malayalam";
let reserved = "";
//Print the new string
console.log(reverseString(str));
