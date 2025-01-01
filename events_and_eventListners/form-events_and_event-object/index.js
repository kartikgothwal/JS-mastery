const input = document.querySelector("#username");
input.addEventListener("input", (event)=>{
    console.log(event.target.value)
})
input.addEventListener("focus", (event)=>{
    console.log(event )
})
input.addEventListener("blur", (event)=>{
    console.log("blur",event )
})
input.addEventListener("change", (event)=>{
    console.log(event )
})