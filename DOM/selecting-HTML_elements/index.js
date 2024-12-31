// differnece between html collection and nodelist
// HTML collection Element nodes only wherease nodelist contain All types of nodes
//You can typically access HTMLCollection using properties like document.forms, document.images, and document.getElementsByTagName() and nodelist by document.querySelectorAll()) or static (like the result of document.getElementsByClassName()).


// by tagname
//it returns an HTML collection
console.log(document.getElementsByTagName("div"))

// by classname
//it returns an HTML collection
console.log(document.getElementsByClassName("content-section"))

// by Id
//it returns an HTML element
console.log(document.getElementById("heading"))

// by queryselector
//it returns an HTML element
console.log(document.querySelector("#heading"))
console.log(document.querySelector(".heading-2"))
console.log(document.querySelector('[type="text"] '))
console.log(document.querySelector('h1'))
console.log(document.querySelector('ul li'))

// by queryselector
//it returns an Nodelist 
console.log(document.querySelectorAll(".heading-2"))
