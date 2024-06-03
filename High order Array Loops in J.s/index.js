/// For of



// const arr = [1,2,3,4,5]
// for (const num of arr) {

//     console.log(num);
    
// }

// const greetings = "Hello World!"
// for (const  greet of greetings ) {
//     console.log(`each char is ${greet}`);
    
// }

// Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }

/////// For in

// const myObject = {
//     JS : 'Java Script',
//     cpp : 'C++',
//     RB : "Ruby",
//     Swift : "Swift by apple"
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]} `);
    
// } 

// const programming = ["JS","Rb","Java","Py","Cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

/////  For eaach //////////

const coding = ["Js","Rb","Java","Py","Cpp"]

// coding.forEach(function (val) {
//     console.log(val);   
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe (item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);

// })


const myCoding = [
    {
        languageName : "Java Script",
        languagefileName : "JS"

},
{
    languageName : "Phyton",
    languagefileName : "Py"
},
{
    languageName : "Ruby",
    languagefileName : "Rb"
},

] 
myCoding.forEach((item)=>{
    console.log(item.languageName);
})