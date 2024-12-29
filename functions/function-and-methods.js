// Methods are those function which are inside of a class or an object whereas the function are the standalone property

function add(a,b){ //this is a function 
    console.log(a+b)
}
add(2,4)

const obj = {
    name:"Kartik",
    age:23,
    a: function (a,b){ // this is a method 
        console.log(a+b)
    }
}
obj.a(20,30)