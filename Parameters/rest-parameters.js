function getData(a,b,c,...rest){
    console.log(a,b,c, rest)
}
const obj ={
    name:"kartik",
    age:23,
    gender:"M",
    isVerified:false
}
let myArray = [1, 2, 3, 4, 5];
 getData(...myArray,34,42)