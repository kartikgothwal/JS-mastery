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
 