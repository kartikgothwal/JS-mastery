// you can give whichever attribute you want to a element and select element in JS and in CSS;

 
const kartik = document.querySelector('[kartik]')
const kartik2 = document.querySelector('[kartik="okay"]')
// console.log(document.querySelector('[kartik="okay"]').attributes)
// console.log("🚀 ~ kartik2:", kartik2)
// console.log("🚀 ~ kartik:", kartik)

//get attribute
console.log(document.querySelector('[kartik]').getAttribute("okay"))

console.log(document.querySelector("input").getAttribute("type"))
console.log(document.querySelector("input").getAttribute("placeholder"))

document.querySelector("[placeholder]").setAttribute("type", "checkbox")
 document.querySelectorAll(".heading-2")[1].setAttribute("id", "box")