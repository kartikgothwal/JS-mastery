//Math.abs() makes everything +ve
const data = Math.abs(-1)
 
//Math.pow(value,power) //used to get the power of a value
const data1 = Math.pow(2,3)
// console.log("🚀 ~ data1:", data1)

//Math.sign to get the sign of the value
const sign= Math.sign(-1)
// console.log("🚀 ~ sign:", sign)


//to get the value of PI
const PI = Math.PI;
// console.log("🚀 ~ PI:", PI)


//To get the value of root 2 
const rootTwoValue = Math.SQRT2
// console.log("🚀 ~ rootTwoValue:", rootTwoValue)


//find the max between numbers
const max = Math.max(10,32,-24,56);
// console.log("🚀 ~ max:", max)


//find the min between numbers
const min = Math.min(10,32,-24,56);
// console.log("🚀 ~ min:", min)


//get a random number between 0 and 1 
const randomNumber = Math.random();
// console.log("🚀 ~ randomNumber:", randomNumber)


//Math.floor round downs a number
console.log(Math.floor(2.4))
console.log(Math.floor(2.9999))

//Math.ceil rounds up a number
console.log(Math.ceil(2.01))
console.log(Math.ceil(2.00001))

//Math.round rounds a number
// 0-0.4 it will be round down
// 0.5-0.9 it will be round up
console.log(Math.round(11.4))
console.log(Math.round(11.5))