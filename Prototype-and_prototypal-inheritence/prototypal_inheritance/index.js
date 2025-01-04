class Humas{
    live(){
        console.log("Hi I am living")
    }
}
class User extends Humas{
    constructor(firstname,lastname,age){
        super()
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    getName(){
        return "Hello world";
        
    }
}
class Employee extends User{
    constructor(firstname,lastname,age, profession){
        super(firstname,lastname,age)
        this.profession = profession
    }
    
    getFullName(){
        return super.getName()
    }
}
class Students extends Employee{
    constructor(firstname,lastname,age, profession, hobbie){
        super(firstname,lastname,age, profession)
        this.hobbie = hobbie
    }
    getName(){
        console.log(super.getName())
        return "Stduent Hello world";
        
    }
}
const emp1 = new Employee("Kartik", "gothwal",24, "SDE");
 const student1 = new Students("hack", "jill", 23, "Trainer", "cricket") ;
 console.log("🚀 ~ student1:", student1.getName())
 