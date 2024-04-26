//Var
var firstName = 'Eric'
console.log(firstName);
var firstName = 'John'
console.log(firstName);

 //Let
let Name = 'Johnny'
console.log(Name);


let Gender = 'male' // Global Variable
function printGender() {
    let age = 30 // Function Variable
    if (Gender.startsWith('male')) {
        console.log('Function Variable from inside the block - ', age);
        let color = 'blue' // Block Variable
        console.log("Block Variable - ", color);
        console.log('He/Him');
    } else {
        console.log('She/Her');

    }
    console.log('Function Variable - ', age);
}
printGender()

//.... Hoisting....

console.log('Before Initializing - ', browserName);
var browserName = 'Chrome'
console.log('After Initializing - ', browserName);

const browserVersion = 'Chrome' // Global Variable
function getBrowserVersion() {
    console.log('Global Variable - ', browserVersion);
    if (browserVersion == 'Chrome') {
        let browserVersion = 'Chrome' // Block Variable
        console.log("Block Variable - ", browserVersion);
    }

}
getBrowserVersion()