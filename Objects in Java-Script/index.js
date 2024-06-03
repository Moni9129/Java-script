/////singleton//////

////////Literal///////
const mySym = Symbol("mykey1")

const Jsuser = {
    name : "Abdul Manan",
    "full name" : "Abdul Manan Arain",
    age :   26,
    [mySym] : "mykey1",
    location : "Islamambad",
    email : "abdulmanan394394@gmail.com",
    isloggedin : false,
    LastLogInDays : ["Monday","Saturday"]
}
console.log(Jsuser.email);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);
console.log(Jsuser["email"]);

Jsuser.email = "abdulmanan@google.com"
Object.freeze(Jsuser)
Jsuser.email = "abdulmanan@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user" );
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Jsuser, ${this.name}`);

}
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());

const course = {
    coursename: "Java_Script",
    price : "400$",
    courseinstructor: "Ali Nawaz"
}
const {courseinstructor:instructor} = course
console.log(instructor);
console.log(course);