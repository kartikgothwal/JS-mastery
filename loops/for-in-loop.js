let person = {
    "name": "Arjun",
    "age": 25,
    "city": "Indore",
    hobbies: ["reading", "cycling", "cooking"]
}
let names = [
    ["Arjun", "Priya", "Ravi"],
    ["Sana", "Ananya", "Kabir"],
    ["Meera", "Ishaan", "Nisha"],
    ["Rohan", "Amit", "Neha"]
]

for(let keys in names){
     console.log(`${keys} : ${names[keys]}`)
}