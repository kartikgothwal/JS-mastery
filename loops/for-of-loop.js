let names = ["Arjun", "Priya", "Ravi", "Sana", "Ananya", "Kabir", "Meera", "Ishaan", "Nisha", "Rohan"]
let person = {
    "name": "Arjun",
    "age": 25,
    "city": "Indore",
    "hobbies": ["reading", "cycling", "cooking"]
}

// debugger
for(var alement of names){ // this will be stored in global so the value of alement will be inside the window and will persist even after the code is executed
    // console.log(alement)
}
for( alement of names){ // this will also store alement in global and this will throw no errors
    // console.log(alement)
}

for(const alement of names){ // this will be stored in global
    // console.log(alement)
}

for(i=0; i<names.length; i++){ // this will work fine 
   console.log(names[i])
}
 
for(let i=0; i<names.length; i++){
   console.log(names[i])
}
 
// for(const i=0; i<names.length; i++){ //this will throw a syntax error
//    console.log(names[i])
// }
 