const ul = document.querySelector("ul")
const h1 = document.querySelector("#heading");

// console.log(ul.innerHTML) // this will give me the text with the HTML elements as well also text content refer to the code written in the code editor
// console.log(ul.innerText) // this will give me the text only but in a formatted way also innertext refer to the what will be seen on the browser
// console.log(ul.textContent) // this will give me the text only but without formatted like whitespaces and \n will be there also text content refer to the code written in the code editor 

h1.innerHTML= "<p>Hello</p>"
h1.textContent= "<p>Hello</p>"
h1.innerText= "<p>Hello</p>"
 
