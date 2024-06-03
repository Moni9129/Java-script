//////////////Dates////////////////

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date("01-13-2024")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

mydate.toLocaleString('default',{
    weekday:"long"
})