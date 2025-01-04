 
const XMLButton = document.querySelector(".xml-button");

XMLButton.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    console.log("🚀 ~ XMLButton.addEventListener ~ xhr:", xhr)
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1");
    xhr.send();
    xhr.addEventListener("load", (e)=>{
       const data = JSON.parse(e.target.response);
       console.log("🚀 ~ xhr.addEventListener ~ data:", data)
       
    })
})