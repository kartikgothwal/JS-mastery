function test(){
        let a =30;
        function abc(){
            console.log(a)
        }
        abc()
}
test()

function closure(){
    let count =0;
   return function abc(){
     count++;
     console.log(count)
   }
}
const x1 = closure();
const x2 = closure();
x1()
x1()
x2()