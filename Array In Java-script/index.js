// const myArr = [0,1,2,3,4]


// console.log(myArr[0]);








// ///////Slice , Splice///////////////
// console.log("A ",myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ",myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C ",myArr);
// console.log(myn2);

//////////////////////////
const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman",]
// marvel_heros.push(dc_heros)
// console.log( marvel_heros);
 const allHeros=marvel.concat(dc)
console.log(allHeros);
const All_new_heros = [...marvel, ...dc]
console.log(All_new_heros);

const another_arry = [1,2,3,4,[2,3],[5,6,8,[0,7]]]
const real_another_arry = another_arry.flat(Infinity)
console.log(real_another_arry);

console.log(Array.isArray("Abdul Manan"));
console.log(Array.from("Abdul Manan"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));