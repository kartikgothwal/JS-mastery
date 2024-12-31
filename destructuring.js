let myArray = [1, 2, 3, 4, 5];
let fruit =["oranges", "mongo","Grapes"]
let person = {
    id: 1,
    fullname: "Kartik Gotwal",
    age: 25, city: "Indore",
    occupation: "Full Stack Developer",
    address: {
        city: "Indore",
        moreDetails: {
            pinCode: 20393,
            zipCode: 244332,
        }
    }
};
const [a, b, ...rest] = myArray
const {2:fruit2}= fruit
console.log("🚀 ~ fruit:", fruit2)
 const { id, occupation } = person

//you can change the name of the key as well
const { fullname: username } = person
// console.log("🚀 ~ username:", username)


//you can access the deep nested values as well
//multilevel destructing
const { address: { city, moreDetails: { pinCode } } } = person
// console.log("🚀 ~ pinCode:", pinCode)
// console.log("🚀 ~ city:", city)


//function desttructing
function getData({fullname, age:digit}) {
 console.log("🚀 ~ getData ~ age:", digit)
 console.log("🚀 ~ getData ~ fullname:", fullname)
 
}; 
// getData(person)