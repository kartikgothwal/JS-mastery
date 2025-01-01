const green = document.getElementById("green")
window.addEventListener("click", ()=>{
    console.log("window")
},true)
document.addEventListener("click", ()=>{
    console.log("document")
},true)
document.body.addEventListener("click", ()=>{
    console.log("body")
},true)
green.addEventListener("click", ()=>{
    
    console.log("green")
},true)
const pink = document.getElementById("pink")
pink.addEventListener("click", (e)=>{
// e.stopPropagation() // this will stop event to propagate and will keep it only to pink
    console.log("pink")
},{capture:true, once:true}) // once:true will make it clickable only once
const yellow = document.getElementById("yellow")
yellow.addEventListener("click", ()=>{
    console.log("yellow")
},true)

//event bubbling if you do some event on children it will propagate till the last parent and in event capturing  if you do some event on children it will propagate from parent it the last children