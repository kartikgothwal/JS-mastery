// https://excalidraw.com/#json=98VFajsn_SE12VNpSZffl,4KlkZI19QV72halrEb1bnA
// factory function is a function which creates and returns an object from it
function createUser(name,age){
    return {
        name:name,
        age:age,
        date : function(){
           return new Date().getFullYear()
        }
    }
}
const user1 = createUser("kartik", 23);
const user2 = createUser("sagar", 24);
 
/// in this  date : function(){
        //    return new Date().getFullYear()
        // }
    // function will be created each time and new memory will be allocated each time which we dont want 

// alternative of this 
const createPersonPrototype = {
    getDate: function(){
        return new Date().getFullYear()
    }
}
function createPerson(name,age){
    return {
        name:name,
        age:age,
        date : createPersonPrototype.getDate
    }
}
const person1 = createPerson("kartik", 23);
const person2 = createPerson("sagar", 24);