function abc(){
    for(var aa=1; aa<=5; aa++){
        function test(ab){
            setTimeout(function(){
                console.log(ab)
            }, ab*1000)
        }
        test(aa)
    }
}
abc()

 function outer (){
    let a ="Hello world";
    return function inner(){
        console.log(a)
    }
 }
 outer()()

function outest(){
    return function outer (i){
        let a ="Hello world";
        return function inner(y){
            console.log(a, i, y)
        }
     }
     
}
outest()("Pagal hai kya")("Why why")