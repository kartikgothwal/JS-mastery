//Nodes - text, element, comment, attribute
// All elements are nodes and not all node are elements

console.log(document.querySelector("body").parentElement)
console.log(document.querySelector("#ul").parentNode)
console.log(document.querySelector("#ul").childNodes)
console.log(document.querySelector("#ul").children)
console.log(document.querySelector("#ul").childElementCount)
console.log(document.querySelector("#ul").nextSibling)
console.log(document.querySelector("#ul").nextElementSibling)
console.log(document.querySelector("#ul").previousSibling)
console.log(document.querySelector("#ul").previousElementSibling)
console.log(document.querySelector("#ul"))