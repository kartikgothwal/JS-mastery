let str = "   Some random string";
let str1 =  String("This is a string");
 let num = 123
console.log(str.split(" "))
console.log(str.concat("another string"))
console.log(str.at(6))
console.log(str.charAt(6))
console.log(str.charCodeAt(6))
console.log(str.length)
console.log(str.replace("Some", "Hum"))
console.log(str.includes("Some"))
console.log(str.repeat(2))
console.log(str.replaceAll("some"))
console.log(str.lastIndexOf("string"))
console.log(str.endsWith("string"))
console.log(str.startsWith("string"))
console.log(str.trim())
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(num.toString())
console.log(str1.valueOf())
console.log(str1.padEnd(20, "l"))
console.log(str1.padStart(20, "l"))


//slice can handle the -ve
//secondIndex has to be bigger
const randomStr = "Hello, World!";
console.log(randomStr.slice(7, 12));  
console.log(randomStr.slice(-3, -1));  


//substring
//doesnt supports -ve and treated as 0
const randomStr2 = "Hello, World!";
console.log(randomStr2.substring(-1,4))
 

