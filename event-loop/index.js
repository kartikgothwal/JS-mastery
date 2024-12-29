// Link for Diagram =https://excalidraw.com/#json=HncRKbVUYl3pfGScaefXs,it2VgPy0v0q1TcFqNkrRkA
//  console.log("Hello world")
// setTimeout(()=>{
//     console.log("Timeout")
// })
// console.log("End");

 console.log("Hello world")
setTimeout(()=>{
    console.log("Timeout")
})
async function getData(){
   fetch('https://jsonplaceholder.typicode.com/todos/30').then((res)=>res.json()).then((data)=>{
    console.log("Data", data)
   });
    
}
getData()
console.log("End");