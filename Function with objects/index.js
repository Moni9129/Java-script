function calculateCartPrice(...num1) {
    return num1
    
}
console.log(calculateCartPrice(200,400,500,600,800));

const user = {
    username: "Abdul Manan",
    price : 199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)
handleobject({
    username: "Moni",
    price : 399
}) 

const myNewArray = [200,300,500,700]
function returnsecoundvalue(getArray) {
    return getArray[1]

    
}
console.log(returnsecoundvalue(myNewArray));