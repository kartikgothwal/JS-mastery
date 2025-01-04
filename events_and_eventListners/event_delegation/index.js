const button = document.querySelector(".button");
const container = document.querySelector(".container");
 button.addEventListener("click", (() => {
     let count = 1;
    return () => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.textContent = count;
        container.append(div)
        count++
    }
})());
container.addEventListener("click", (e)=>{
    let target = e.target;
    target.remove();
    
})  