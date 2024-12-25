// Scope channing;
// link - https://excalidraw.com/#json=VVIaRTA9iWjih2TPOy8OY,4S39Fy6SWa7q8PhZHSEMTQ

let a =20;
function test(){
    let c =230;
    function abc(){
        console.log(c,a)
    }
    abc()
}
test()

//block scope ;
{
    let a = "Hello my name is javascript"
    console.log(a)
}
console.log(a)