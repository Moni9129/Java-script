// If

// const isUserlogedIn = true
// if (2=="2"){
//     console.log("executed");
// }

// // <   >   <=   >=  == != === !==

// const temperature = 41
// if (temperature === 41){
//     console.log("than less 50");
// }

// const balance = 1000
// // if(balance > 500)  console.log("test");

// if(balance < 500){
//     console.log("less than 500");

// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

// const UserlogedIn = true
// const debitcard = true
// const UserlogedInfromGoogle = false
// const UserlogedInfromEmail = true

// if(UserlogedIn && debitcard){
//     console.log("Allow to buy course");
// }

// if(UserlogedInfromGoogle || UserlogedInfromEmail ){
//     console.log("UserlogedIn");
// }

/////////////    Switch   /////////////////
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 3
// switch (month) {
//     case 1:
//         console.log("jan");
        
//         break;
//     case 2:
//         console.log("feb");
        
//         break;
//     case 3:
//         console.log("march");
        
//         break;
//     case 4:
//         console.log("april");
        
//         break;

//     default:
//         console.log("default value match");
//         break;
// }


const userEmail = "abdulmanan@.ai"

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("don't have  user email");
// }


// ///////  Falsy Values  /////////

// false, 0 , -0 , BigInt 0n , null , "" , undefined , NaN

// ///////// Truthy Values  ////////

// "0" , `false` ," " , [] , {} , function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");
    
// }


// const emptyObj ={}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("empty object");
    
// }

// NUllish coalescing operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


///// Terniary operator ////////

// condition ? true : false

// const iceteaprice = 100

// iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");