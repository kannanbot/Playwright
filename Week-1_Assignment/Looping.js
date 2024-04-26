//Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25

function printOddNumbers() {
    for (let index = 1; index <= 25; index++) {
        if(index%2 !== 0){
            console.log(index);
        } 
    }
}

printOddNumbers();