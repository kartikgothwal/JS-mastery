function Person(name, age){
    this.age=age;
    this.name = name;
    // this.sayHI=sayHI
}

Person.prototype.date = function (){
    return new Date().getFullYear()
}
Person.prototype.day = function (){
    return new Date().getDate()
}
Person.prototype.month = function (){
    return new Date().getMonth()
}
    



const p1 =new Person("kartik", 23);
const p2 =new Person("usha", 344);