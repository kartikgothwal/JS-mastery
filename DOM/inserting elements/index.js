const h1 = document.querySelector("h1");
const container= document.querySelector(".container");
container.style.border ="2px solid red"
container.style.margin ="10px"

//appendchild will only work on the node not on string whereas append can append anything 
//appendchild returns the element appended whereas append doesnt returns anything


//Appendchild
// container.appendChild(h1) // this will cut and paste the element

// for cloning or copying an element
// console.log(h1.cloneNode()) // this will only clone the h1 and not the content inside it
// console.log(h1.cloneNode(true)) // this will  clone the h1 and its content aka everything

// container.appendChild(h1.cloneNode(true))


//Append
container.append(h1)
container.append("Hello world")
// container.appendChild("Hello world")// this will throw and error


//prepend
container.prepend(h1) // add before and returns nothing


//after and before

container.after(h1)
container.before(h1)
 

//replacewith
container.replaceWith(h1)
 