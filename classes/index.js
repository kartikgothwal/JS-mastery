class Person{
    constructor(a,b,c){
        this.firstname = a;
        this.lastname = b;
        this.age = c;
    }
    getDate (){
        return new Date();
    }
}

 
const p1 = new Person("Kartik", "gothwal", 23);
const p2 = new Person("sagar", "verma", 23);
 