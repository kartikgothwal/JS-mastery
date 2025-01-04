class Person{
     jj="hell";
     #firstname;
    constructor(firstname,lastname,age){
        console.log(this.#getDate())
        this.#firstname=firstname;
        this.lastname=lastname;
        this.age=age;

    }
    getfirstname(){
        console.log(this.#firstname)
    }
    #getDate(){
        return new Date();
    }
}
const p1 = new Person("Kartik", "son", 233);
 