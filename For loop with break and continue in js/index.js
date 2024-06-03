/// For

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    if (element == 5) {
        console.log("5 is the best number");
        
    }
    
}


for (let i = 0; i <= 10; i++) {
    console.log(`outerloop: ${i}`);
    for (let j = 0; j <= 10; j++) {
    
        console.log(`innerloop: ${j} and inner loop ${i}`);
    
        
    }
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

////// break and continue //////

for (let index = 1; index <=20 ; index++) {
    if (index == 5) {
        console.log("deteted 5");
        continue
        
    }
    console.log(`value of i is ${index}`);
    
}