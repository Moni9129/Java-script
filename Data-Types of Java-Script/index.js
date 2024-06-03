//Data-Types
//Permitive 
// 7 Types String, Number, Boolean, Null,Symbol,Undefined, BigInt 

const score = 100
const scoreValue = 100.8
const isloggedin = false
const outsidetemp = null
let userEmail;
const Id =Symbol('123')
const anotherId =Symbol('123')
console.log(Id===anotherId);

// Reference (Non-Permitive) Arrar,, Function, Objects

const heros=["Superman","Batman","Tripple H"]   //Arrays
console.log(typeof heros)

let myObj={
     name : "AbdulManan",       /// OBJECT
     age :   26,

}
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hellow world");
}
console.log(typeof myFunction);
