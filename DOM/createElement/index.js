const img = document.createElement("img");
const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent="hello world"
console.log("🚀 ~ h1:", h1)
div.setAttribute("class", "divbox")
img.src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
img.height=100
img.width=100

document.querySelector(".container").prepend(img, div)
div.append(h1)
