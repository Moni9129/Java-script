// function sayMyName(){
//     console.log("A");
//     console.log("B");
//     console.log("D");
//     console.log("U");
//     console.log("L");
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("A");
//     console.log("N");
// }
// sayMyName()

// function addTwoNumbers (number1,number2) {
//     console.log(number1 + number2);
    
    
// }
// addTwoNumbers(3,6)

// function addTwoNumbers (number1,number2) {
//     // let result = number1 + number2
//     return number1 + number2
    
    
// }
// const result = addTwoNumbers(3,5)
// console.log("result:", result);

function LoginUserMessage(username) {
    if (username === undefined) {
        console.log("Please eneter a username");
        return
        
    }
    return `${username} just loged in`
} 
console.log(LoginUserMessage());