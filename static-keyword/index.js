class Person {
    salary=2334
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    //static block
    static {
        this.hi = "Hello world"
        this.sayHi= function (){
            console.log("HII")
        }
     }
    static run ="running";
    // this can also be access by the class only not by the object created via class
   static getfirstname() {
         console.log(this.run)
    }
    getDate() {
        return new Date();
    }
}
const p1 = new Person("Kartik", "son", 233);
console.log(Person.getfirstname())
 console.dir(Person.sayHi())